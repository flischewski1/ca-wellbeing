# Task for further experiments

- *Step 1:* clone the repositpry into a folder

- *Step 2:* Create a virtual environment in it ($python -m venv venv)

- *Step 3:* Activate environment ($venv\Scripts\activate)

- *Step 4:* Install required packages, when virtual environment is activated ($ pip install -r requirements.txt) 

- Run server (currently in DEBUG mode): $python manage.py runserver
- The task should be available at http://127.0.0.1:8000/label/1/

Important notes:

- If changes on files in the static folder are applied, the package whitenoise (for production purposes) must be considered (after changing JS/CSS/HTML conduct $python manage.py collectstatic)
- For a different surveylink, change the URL in label\static\js\cookieMonitoring.js) 
