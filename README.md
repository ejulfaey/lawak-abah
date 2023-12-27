# Welcome to Lawak-Abah Community

## Getting Started

1. **Clone this repository** from the `dev` branch and navigate to the project folder:

   ```bash
   git clone -b dev https://github.com/ejulfaey/lawak-abah.git
   cd lawakAbah
   ```

2. **Set up your ".env" file** in the project root with the following content:
   ```bash
    NEXT_APP_API_URL="http://localhost:3000/api"
    DATABASE_URL="postgres://postgres:YOUR_SUPABASE_PASSWORD@database.supabase.co:5432/postgres?schema=public"
    ```
3. **Install dependencies and build the project:**
    ```bash
    npm install && npm run build
    ```
4. **Serve your project**
    ```bash
    npm run dev
    ```
    
Now you're ready to start using the lawakAbah community project! If you have any questions or issues, feel free to reach out.

Happy coding!