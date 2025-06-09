from app import create_app
import os

if not os.path.exists('uploads'):
    os.makedirs('uploads')

app = create_app()

if __name__ == '__main__':
    app.run(debug=False, port=5000)

