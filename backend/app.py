from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from flask_mail import Mail, Message
from datetime import datetime, timedelta
import os
from werkzeug.security import generate_password_hash, check_password_hash
import secrets

# Initialize Flask app
app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'kahatia-school-secret-key-2024')
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///kahatia_school.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Mail configuration
app.config['MAIL_SERVER'] = os.environ.get('MAIL_SERVER', 'smtp.gmail.com')
app.config['MAIL_PORT'] = int(os.environ.get('MAIL_PORT', 587))
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.environ.get('MAIL_DEFAULT_SENDER', 'info@kahatiasecondary.ac.ke')

# Import models and initialize extensions
from models import db, Student, Teacher, User, ContactMessage, NewsArticle, Event, Gallery

# Initialize extensions with app
db.init_app(app)
CORS(app)
mail = Mail(app)

# Create tables
with app.app_context():
    db.create_all()

# Routes
@app.route('/')
def index():
    return jsonify({
        'message': 'Kahatia Secondary School API',
        'version': '1.0.0',
        'status': 'active'
    })

@app.route('/api/health')
def health_check():
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.utcnow().isoformat(),
        'database': 'connected'
    })

# Contact form endpoint
@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'{field} is required'}), 400
        
        # Create contact message
        contact_message = ContactMessage(
            name=data['name'],
            email=data['email'],
            phone=data.get('phone', ''),
            subject=data['subject'],
            message=data['message']
        )
        
        db.session.add(contact_message)
        db.session.commit()
        
        # Send email notification (if configured)
        try:
            msg = Message(
                subject=f'New Contact Form Submission: {data["subject"]}',
                recipients=['admin@kahatiasecondary.ac.ke'],
                body=f"""
New contact form submission received:

Name: {data['name']}
Email: {data['email']}
Phone: {data.get('phone', 'Not provided')}
Subject: {data['subject']}

Message:
{data['message']}

Submitted at: {datetime.utcnow()}
                """
            )
            mail.send(msg)
        except Exception as e:
            print(f"Failed to send email: {e}")
        
        return jsonify({'message': 'Message sent successfully'}), 201
        
    except Exception as e:
        return jsonify({'error': 'Failed to send message'}), 500

# Get school statistics
@app.route('/api/stats')
def get_stats():
    try:
        student_count = Student.query.count()
        teacher_count = Teacher.query.count()
        
        return jsonify({
            'students': student_count,
            'teachers': teacher_count,
            'pass_rate': 98,  # Static value for demo
            'years_of_excellence': 15
        })
    except Exception as e:
        return jsonify({'error': 'Failed to fetch statistics'}), 500

# Get recent news
@app.route('/api/news')
def get_news():
    try:
        news = NewsArticle.query.filter_by(published=True).order_by(NewsArticle.created_at.desc()).limit(5).all()
        return jsonify([{
            'id': article.id,
            'title': article.title,
            'excerpt': article.excerpt,
            'content': article.content,
            'created_at': article.created_at.isoformat(),
            'author': article.author
        } for article in news])
    except Exception as e:
        return jsonify({'error': 'Failed to fetch news'}), 500

# Get upcoming events
@app.route('/api/events')
def get_events():
    try:
        events = Event.query.filter(Event.date >= datetime.utcnow()).order_by(Event.date).limit(5).all()
        return jsonify([{
            'id': event.id,
            'title': event.title,
            'description': event.description,
            'date': event.date.isoformat(),
            'location': event.location
        } for event in events])
    except Exception as e:
        return jsonify({'error': 'Failed to fetch events'}), 500

# Get gallery images
@app.route('/api/gallery')
def get_gallery():
    try:
        category = request.args.get('category', '')
        
        query = Gallery.query.filter_by(published=True)
        if category and category != 'all':
            query = query.filter_by(category=category)
        
        images = query.order_by(Gallery.created_at.desc()).all()
        
        return jsonify([{
            'id': image.id,
            'title': image.title,
            'description': image.description,
            'category': image.category,
            'image_url': image.image_url,
            'created_at': image.created_at.isoformat()
        } for image in images])
    except Exception as e:
        return jsonify({'error': 'Failed to fetch gallery'}), 500

# Newsletter subscription
@app.route('/api/subscribe', methods=['POST'])
def subscribe_newsletter():
    try:
        data = request.get_json()
        email = data.get('email')
        
        if not email:
            return jsonify({'error': 'Email is required'}), 400
        
        # Here you would typically save to a newsletter database table
        # For now, we'll just return success
        
        return jsonify({'message': 'Successfully subscribed to newsletter'}), 201
        
    except Exception as e:
        return jsonify({'error': 'Failed to subscribe'}), 500

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Endpoint not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'error': 'Internal server error'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)