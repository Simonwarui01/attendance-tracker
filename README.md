# Kahatia Secondary School Website

A comprehensive school website built with React, Python (Flask), and SQL database, designed for hosting on Azure.

## 🏫 About

Kahatia Secondary School website provides a modern, responsive platform for students, parents, teachers, and the community to access school information, academic resources, and stay updated with school activities.

## ✨ Features

### Frontend (React)
- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **Multiple Pages**: Home, About, Academics, Admissions, Gallery, Contact
- **Interactive Components**: Dynamic navigation, image galleries, contact forms
- **Mobile Responsive**: Optimized for all device sizes
- **Animations**: Smooth transitions with Framer Motion

### Backend (Python/Flask)
- **RESTful API**: Clean API endpoints for data management
- **Database Management**: SQLAlchemy ORM with comprehensive models
- **Contact Forms**: Email integration for inquiries
- **Content Management**: News, events, gallery management
- **Student Management**: Student and teacher records

### Key Sections
- **Home**: School overview, statistics, recent news, upcoming events
- **About**: School history, mission, vision, leadership team
- **Academics**: Curriculum, programs, facilities, performance
- **Admissions**: Application process, requirements, fees, scholarships
- **Gallery**: Photo gallery with categories (academic, sports, events)
- **Contact**: Contact forms, location, department contacts

## 🛠️ Technology Stack

### Frontend
- React 18.2.0
- React Router DOM
- Tailwind CSS
- Framer Motion (animations)
- Lucide React (icons)
- Vite (build tool)

### Backend
- Python 3.8+
- Flask 2.3.3
- SQLAlchemy (ORM)
- Flask-CORS
- Flask-Mail
- SQLite (development) / PostgreSQL (production)

### Deployment
- Azure App Service
- Azure Database for PostgreSQL
- Azure Storage Account

## 📁 Project Structure

```
kahatia-secondary-school/
├── src/                          # React frontend
│   ├── components/
│   │   ├── pages/               # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Academics.jsx
│   │   │   ├── Admissions.jsx
│   │   │   ├── Gallery.jsx
│   │   │   └── Contact.jsx
│   │   ├── Navigation.jsx       # Navigation component
│   │   ├── Footer.jsx          # Footer component
│   │   └── App.jsx             # Main app component
│   ├── index.css               # Global styles
│   └── main.jsx               # App entry point
├── backend/                     # Python Flask backend
│   ├── app.py                  # Main Flask application
│   ├── models.py               # Database models
│   ├── seed_data.py            # Sample data script
│   ├── requirements.txt        # Python dependencies
│   └── .env.example           # Environment variables example
├── public/                     # Static assets
├── package.json               # Node.js dependencies
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Python 3.8+
- Git

### Frontend Setup

1. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Access frontend**
   - Open http://localhost:5173

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Initialize database and seed data**
   ```bash
   python seed_data.py
   ```

6. **Start backend server**
   ```bash
   python app.py
   ```

7. **Access backend API**
   - API: http://localhost:5000
   - Health check: http://localhost:5000/api/health

### Default Admin Credentials
- **Username**: admin
- **Password**: admin123
- **Email**: admin@kahatiasecondary.ac.ke

## 🌐 API Endpoints

### Public Endpoints
- `GET /` - API information
- `GET /api/health` - Health check
- `GET /api/stats` - School statistics
- `GET /api/news` - Recent news articles
- `GET /api/events` - Upcoming events
- `GET /api/gallery` - Gallery images
- `POST /api/contact` - Submit contact form
- `POST /api/subscribe` - Newsletter subscription

### Authentication Required
- Student management endpoints
- Teacher management endpoints
- Content management endpoints
- Admin panel endpoints

## 🏗️ Database Schema

### Core Models
- **User**: System users (admin, teachers, students)
- **Student**: Student records and information
- **Teacher**: Teacher profiles and details
- **Subject**: Academic subjects
- **Grade**: Student grades and performance
- **NewsArticle**: News and announcements
- **Event**: School events and calendar
- **Gallery**: Photo gallery management
- **ContactMessage**: Contact form submissions

## 🎨 Design Features

### Visual Elements
- **School Colors**: Blue (#1e40af), Green (#059669), Red (#dc2626)
- **Typography**: Inter font family
- **Icons**: Lucide React icon library
- **Images**: Unsplash integration for demo images

### User Experience
- **Responsive Design**: Mobile-first approach
- **Fast Loading**: Optimized images and code splitting
- **Accessibility**: ARIA labels and semantic HTML
- **SEO Friendly**: Meta tags and structured data

## ☁️ Azure Deployment

### Frontend Deployment (Azure Static Web Apps)
1. Build the React application
2. Deploy to Azure Static Web Apps
3. Configure custom domain

### Backend Deployment (Azure App Service)
1. Create Azure App Service (Python)
2. Deploy Flask application
3. Configure environment variables
4. Set up Azure Database for PostgreSQL

### Database Setup
1. Create Azure Database for PostgreSQL
2. Update connection string in environment variables
3. Run database migrations
4. Seed initial data

## 📊 Features by User Type

### Students & Parents
- View school information and news
- Check academic programs and requirements
- Submit admission applications
- Contact school departments
- View photo gallery and events

### Teachers
- Manage student records
- Post news and announcements
- Upload photos to gallery
- Schedule events

### Administrators
- Full system access
- User management
- Content management
- System configuration
- Analytics and reporting

## 🔒 Security Features

- Password hashing with Werkzeug
- CORS configuration
- Input validation and sanitization
- SQL injection prevention with SQLAlchemy
- Environment variable management

## 📈 Performance Optimizations

- Code splitting with React Router
- Image optimization and lazy loading
- Database query optimization
- Caching strategies
- Minified production builds

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, please contact:
- **Email**: support@kahatiasecondary.ac.ke
- **Phone**: +254 712 345 678
- **Address**: P.O. Box 123, Kahatia, Eastern Province, Kenya

## 🙏 Acknowledgments

- Kenya Institute of Curriculum Development for educational guidelines
- Unsplash for demo images
- React and Flask communities for excellent documentation
- All contributors to this project

---

**Kahatia Secondary School** - Excellence Through Education
