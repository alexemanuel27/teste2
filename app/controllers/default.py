from flask import render_template, request
from app import app


@app.route('/', methods = ['GET', 'POST'])
def index():

    if request.method == 'POST':
        country      = request.form['country']
        country_code = request.form['country_code']
        place_type   = request.form['place_type']

        '''
        place_name   = request.form['name']
        place_code   = request.form['place_code']
        area_code    = request.form['area_code']
        nicknames    = request.form['nicknames']
        gentile      = request.form['gentile']
        '''

    return render_template('index.html')

