from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
import os
import uuid
import logging

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'pdf'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16 MB limit

logging.basicConfig(level=logging.INFO)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'success': False, 'message': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'success': False, 'message': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        try:
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

            # Prevent overwriting files
            if os.path.exists(file_path):
                filename = f"{uuid.uuid4().hex}_{filename}"
                file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

            file.save(file_path)
            logging.info(f"File saved: {file_path}")
            return jsonify({'success': True, 'filename': filename, 'path': file_path}), 201
        except Exception as e:
            logging.error(f"File upload error: {e}")
            return jsonify({'success': False, 'message': 'An error occurred during file upload.'}), 500

    return jsonify({'success': False, 'message': 'Invalid file format. Only PDF is allowed.'}), 400

if __name__ == '__main__':
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)

    app.run(debug=True)
