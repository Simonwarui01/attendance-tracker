#!/usr/bin/env python3
"""
Azure App Service startup script for Kahatia Secondary School backend
"""

import os
import sys
from app import app

if __name__ == "__main__":
    # Azure App Service will set PORT environment variable
    port = int(os.environ.get('PORT', 5000))
    
    # Run the application
    app.run(
        host='0.0.0.0',
        port=port,
        debug=False  # Always False in production
    )