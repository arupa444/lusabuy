from flask import Blueprint, render_template, redirect, url_for, current_app, request, flash, json, g
# flash is use as like as alert in js but in a different way like flashing a message on a specific point of a code
from form import LusaContact, LusaSubscriber
# Fatch the data from the .py file name form.py
app_bluePrint = Blueprint("lusaPrint", __name__)
# the "lusaPrint use when you try to invoke a function using url_for method"
from datetime import datetime
import pymongo
from bson.objectid import ObjectId
from bson import json_util

@app_bluePrint.before_request
def before_request():
    g.db = current_app.config['db']

def serialize_document(doc):
    """Converts ObjectId to string in a MongoDB document."""
    if isinstance(doc, dict):
       for key, value in doc.items():
          if isinstance(value, ObjectId):
               doc[key] = str(value)
          elif isinstance(value, dict):
               serialize_document(value) # Recursive call for nested dicts
          elif isinstance(value, list):
             for i, item in enumerate(value):
                if isinstance(item, dict):
                    serialize_document(item) # recursive call for nested dicts in lists
                elif isinstance(item, ObjectId):
                   value[i]= str(item)
    return doc

@app_bluePrint.context_processor
def inject_globals():
    subForm = LusaSubscriber()
    if subForm.validate_on_submit():
        flash('We have received your request, NOW we will reach out to your mail.... with updates', 'success')
        return redirect(url_for('lusaPrint.home'))
    return dict(json=json, subForm=subForm)

@app_bluePrint.route('/', methods=['GET','POST'])
def home():
    # g.db.aaravInsites.insert_many(aaravInsites) # to add a collection in a static manner
    # collectionArupa = g.db["interviews"]
    # all_collectionArupa = collectionArupa.find()
    return render_template('index.html', title='Home')