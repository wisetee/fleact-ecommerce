from flask import Flask, render_template

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/shop')
def shop():
    return render_template('shop.html')

@app.route('/sale')
def sale():
    return render_template('shop.html')

@app.route('/account')
def account():
    return render_template('account.html')

@app.route('/wishlist')
def wishlist():
    return render_template('wishlist.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True)