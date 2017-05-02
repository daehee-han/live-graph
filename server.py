from flask import Flask, jsonify, render_template
from subprocess import call
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.secret_key = 'mysecret'

socket_io = SocketIO(app)

# _mode = 'start' or 'stop'
_mode = 'stop'
#_sensitive = 0.3

@app.route('/')
def draw():
    return render_template('main.html')

# Changing Mode
@socket_io.on('change mode')
def changer(data):
    if data['mode'] == 'start':
        _mode = 'start'
    else:
        _mode = 'stop'

# Receiving Messages
@socket_io.on('my event')
def drawer(data):
    if self._mode != 'start':
        pass
    else:
        print('input data: ' + str(data))
        # send webpage
        emit('draw', {'temp': 10}, broadcast=True)

if __name__ == '__main__':
    socket_io.run(app, debug=True, host='0.0.0.0', port=80)