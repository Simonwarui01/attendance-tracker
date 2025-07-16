#!/usr/bin/env python3
"""
Script to populate the database with sample data for Kahatia Secondary School
"""

from app import app, db
from models import (
    User, Student, Teacher, ContactMessage, NewsArticle, 
    Event, Gallery, AcademicYear, Subject
)
from datetime import datetime, date, timedelta
import json

def create_sample_data():
    """Create sample data for the school website"""
    
    with app.app_context():
        # Clear existing data (optional, comment out if you want to keep existing data)
        # db.drop_all()
        # db.create_all()
        
        # Create Academic Year
        current_year = AcademicYear(
            year="2024",
            start_date=date(2024, 1, 15),
            end_date=date(2024, 11, 30),
            is_current=True
        )
        db.session.add(current_year)
        
        # Create Subjects
        subjects = [
            Subject(name="Mathematics", code="MATH", category="Sciences", is_compulsory=True),
            Subject(name="English", code="ENG", category="Languages", is_compulsory=True),
            Subject(name="Kiswahili", code="KIS", category="Languages", is_compulsory=True),
            Subject(name="Physics", code="PHY", category="Sciences"),
            Subject(name="Chemistry", code="CHEM", category="Sciences"),
            Subject(name="Biology", code="BIO", category="Sciences"),
            Subject(name="History", code="HIST", category="Humanities"),
            Subject(name="Geography", code="GEOG", category="Humanities"),
            Subject(name="Computer Studies", code="COMP", category="Technical"),
            Subject(name="Business Studies", code="BST", category="Technical"),
        ]
        
        for subject in subjects:
            db.session.add(subject)
        
        # Create Users
        admin_user = User(
            username="admin",
            email="admin@kahatiasecondary.ac.ke",
            role="admin"
        )
        admin_user.set_password("admin123")
        db.session.add(admin_user)
        
        principal_user = User(
            username="principal",
            email="principal@kahatiasecondary.ac.ke",
            role="teacher"
        )
        principal_user.set_password("principal123")
        db.session.add(principal_user)
        
        # Create Teachers
        teachers = [
            {
                "employee_number": "T001",
                "first_name": "Joseph",
                "last_name": "Mwangi",
                "date_of_birth": date(1975, 5, 15),
                "gender": "Male",
                "phone": "+254712345678",
                "email": "j.mwangi@kahatiasecondary.ac.ke",
                "qualification": "M.Ed (Educational Leadership)",
                "experience_years": 15,
                "employment_date": date(2009, 1, 15),
                "designation": "Principal",
                "subjects": "[]",
                "user": principal_user
            },
            {
                "employee_number": "T002",
                "first_name": "Grace",
                "last_name": "Njeri",
                "date_of_birth": date(1980, 8, 22),
                "gender": "Female",
                "phone": "+254734567890",
                "email": "g.njeri@kahatiasecondary.ac.ke",
                "qualification": "B.Ed (Mathematics & Physics)",
                "experience_years": 12,
                "employment_date": date(2012, 3, 1),
                "designation": "Deputy Principal",
                "subjects": '["Mathematics", "Physics"]'
            },
            {
                "employee_number": "T003",
                "first_name": "David",
                "last_name": "Kiprotich",
                "date_of_birth": date(1982, 3, 10),
                "gender": "Male",
                "phone": "+254712345679",
                "email": "d.kiprotich@kahatiasecondary.ac.ke",
                "qualification": "M.Sc (Chemistry)",
                "experience_years": 10,
                "employment_date": date(2014, 9, 1),
                "designation": "Director of Studies",
                "subjects": '["Chemistry", "Mathematics"]'
            }
        ]
        
        for teacher_data in teachers:
            teacher = Teacher(**teacher_data)
            db.session.add(teacher)
        
        # Create Sample Students
        students = [
            {
                "admission_number": "KSS001/2024",
                "first_name": "John",
                "last_name": "Kamau",
                "date_of_birth": date(2008, 5, 15),
                "gender": "Male",
                "form": "Form 1",
                "stream": "A",
                "admission_date": date(2024, 1, 15),
                "guardian_name": "Peter Kamau",
                "guardian_phone": "+254722123456",
                "guardian_email": "p.kamau@email.com",
                "kcpe_marks": 385,
                "current_year": 2024
            },
            {
                "admission_number": "KSS002/2024",
                "first_name": "Mary",
                "last_name": "Wanjiku",
                "date_of_birth": date(2008, 8, 22),
                "gender": "Female",
                "form": "Form 1",
                "stream": "A",
                "admission_date": date(2024, 1, 15),
                "guardian_name": "Grace Wanjiku",
                "guardian_phone": "+254733234567",
                "guardian_email": "g.wanjiku@email.com",
                "kcpe_marks": 392,
                "current_year": 2024
            }
        ]
        
        for student_data in students:
            student = Student(**student_data)
            db.session.add(student)
        
        # Create News Articles
        news_articles = [
            {
                "title": "New Science Laboratory Opened",
                "excerpt": "State-of-the-art chemistry and physics laboratory now operational for enhanced learning.",
                "content": "Kahatia Secondary School is proud to announce the opening of our new science laboratory facility. The laboratory is equipped with modern equipment and safety features that will enhance the learning experience for our students in Chemistry and Physics. This investment demonstrates our commitment to providing quality education and preparing our students for careers in STEM fields.",
                "author": "School Administration",
                "published": True
            },
            {
                "title": "Outstanding KCSE Results 2023",
                "excerpt": "Kahatia Secondary School achieves 98% pass rate in KCSE 2023 examinations.",
                "content": "We are delighted to announce that our students have achieved exceptional results in the 2023 KCSE examinations. With a 98% pass rate and an average grade of 8.5, our school continues to be among the top performers in the region. We congratulate all our students, teachers, and parents for this remarkable achievement.",
                "author": "Joseph Mwangi",
                "published": True
            },
            {
                "title": "Sports Day Success",
                "excerpt": "Annual sports day showcases student talent in various athletic events.",
                "content": "Our annual sports day was a tremendous success, with students participating in various athletic events including track and field, football, volleyball, and basketball. The event not only showcased the athletic talents of our students but also promoted teamwork, healthy competition, and school spirit.",
                "author": "Sports Department",
                "published": True
            }
        ]
        
        for article_data in news_articles:
            article = NewsArticle(**article_data)
            db.session.add(article)
        
        # Create Events
        events = [
            {
                "title": "Term 1 Examinations",
                "description": "End of term examinations for all forms",
                "date": datetime(2024, 3, 15, 8, 0),
                "location": "School Premises",
                "event_type": "academic"
            },
            {
                "title": "Science Fair",
                "description": "Annual science fair showcasing student innovations and experiments",
                "date": datetime(2024, 4, 5, 9, 0),
                "location": "School Hall",
                "event_type": "academic"
            },
            {
                "title": "Sports Day",
                "description": "Annual inter-house sports competition",
                "date": datetime(2024, 4, 20, 8, 0),
                "location": "School Grounds",
                "event_type": "sports"
            },
            {
                "title": "Parent-Teacher Conference",
                "description": "Meeting between parents and teachers to discuss student progress",
                "date": datetime(2024, 5, 10, 14, 0),
                "location": "Various Classrooms",
                "event_type": "academic"
            }
        ]
        
        for event_data in events:
            event = Event(**event_data)
            db.session.add(event)
        
        # Create Gallery Items
        gallery_items = [
            {
                "title": "Science Laboratory",
                "description": "Students conducting experiments in our modern chemistry lab",
                "image_url": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "academic"
            },
            {
                "title": "Computer Studies Class",
                "description": "Students learning programming in our computer laboratory",
                "image_url": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "academic"
            },
            {
                "title": "Football Victory",
                "description": "Our football team celebrating their regional championship",
                "image_url": "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "sports"
            },
            {
                "title": "Graduation Ceremony",
                "description": "Class of 2023 graduation celebration",
                "image_url": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                "category": "events"
            }
        ]
        
        for gallery_data in gallery_items:
            gallery_item = Gallery(**gallery_data)
            db.session.add(gallery_item)
        
        # Commit all changes
        db.session.commit()
        print("✅ Sample data created successfully!")
        print(f"Created:")
        print(f"  - {len(subjects)} subjects")
        print(f"  - {len(teachers)} teachers")
        print(f"  - {len(students)} students")
        print(f"  - {len(news_articles)} news articles")
        print(f"  - {len(events)} events")
        print(f"  - {len(gallery_items)} gallery items")
        print(f"  - 1 academic year")
        
        print("\nAdmin credentials:")
        print("Username: admin")
        print("Password: admin123")
        print("Email: admin@kahatiasecondary.ac.ke")

if __name__ == "__main__":
    create_sample_data()