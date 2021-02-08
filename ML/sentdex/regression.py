# Imports
import pandas as pd
import numpy as np
import quandl
import math
from sklearn import preprocessing, model_selection, svm
from sklearn.linear_model import LinearRegression

# Data In
df = quandl.get('WIKI/GOOGL')
df = df[['Adj. Open', 'Adj. High', 'Adj. Low', 'Adj. Close', 'Adj. Volume']]

# Data Clean
df['HL_PCT'] = (df['Adj. High']-df['Adj. Close'])/df['Adj. Close'] * 1e2
df['PCT_CH'] = (df['Adj. Close']-df['Adj. Open'])/df['Adj. Open'] * 1e2

df = df[['Adj. Close', 'HL_PCT', 'PCT_CH', 'Adj. Volume']]

forecast_col = 'Adj. Close'
forecast_out = int(math.ceil(0.01 * len(df)))
print(forecast_out)

df.fillna(-99999, inplace=True)

df['label'] = df[forecast_col].shift(-forecast_out)
df.dropna(inplace=True)

# Regression

X = np.array(df.drop(['label'], 1))
Y = np.array(df['label'])

X = preprocessing.scale(X)
Y = np.array(df['label'])

X_train, X_test, Y_train, Y_test = model_selection.train_test_split(
    X, Y, test_size=0.2)

# Model

clf = LinearRegression()
clf.fit(X_train, Y_train)

acc = clf.score(X_test, Y_test)

print(acc)

# print(df.head())
