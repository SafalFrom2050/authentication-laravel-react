## Laravel Authentication With React

### Steps to set up this project locally

    - Clone the repository.
    - Go to project root directory and then,
        - Install Composer dependency with `composer install`.
        - Install node dependency with `npm install`.
    - Duplicate *.env.example* file to *.env*.
    - Adjust database connection in `config/database.php` and `.env` file.
    - Run migration and seed `php artisan migrate:refresh --seed`
    - Generate encryption key `php artisan key:generate`
    - Copy file `webpack.mix.js-sample` to `webpack.mix.js` and adjust properties if required.
    - Run `npm run dev` for front end assets compilation.
