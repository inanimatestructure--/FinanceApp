from __future__ import absolute_import, division, print_function, unicode_literals
import tensorflow as tf

from tensorflow import keras
import matplotlib as mpl
import matplotlib.pyplot as plt
import numpy as np
import os
import pandas as pd

import numpy as np 

print (tf.__version__)

(train_data,test_data), info = tfds.load(
    'https://www.alphavantage.co/query?',
    split = (tfds.Split.TRAIN, tfds.Split.TEST),
    as_supervised=True,
    with_info=True
)

class_names = ['']

model = keras.Sequential([
    keras.layers.Flatten(input_shape=(2,2)),
    keras.layers.Dense(6,activation="relu"),
    keras.layers.Dense(10,activation="softmax")
])

model.compile(optimizer="adam",loss="sparse_categorical_crossentropy", metrics=["accuracy"])

model.fit(train_prices, train_times,epochs=5)

test_loss,test_acc = model.evaluate(test_prices,test_times)

prediction = model.predict(test_prices) 
print(np.argmax(prediction[0]))

if isBought:
    if prediction > 0.5:
        print "Buy"
    else:
        print "Don't Buy"   
else:
    if prediction > 0.5:
        print "Sell"
    else:
        print "Don't Sell"   

print("Tested Acc:", test_acc)