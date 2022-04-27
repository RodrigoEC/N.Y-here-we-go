# N.Y here we go! ✈️

## What is, actually, why is this project?

Well, me and a friend are planning a posgraduate vacation to New York and we were creating pages on Notion so we could organize ourselves. I also always wanted to  do something with the Notion API, so I had the idea of creating a site using the Notion API as a CMS, a site where I can update my notion database and the site show how much will it cost in *Reais* to make our vacation. So, that's it, I hope you like it.

## Prerequisites

- ReactJS;
- Your workspace (owned by you) on Notion;
- git.

## How to run it

1. Clone this repository

```
git clone https://github.com/RodrigoEC/N.Y-here-we-go.git
```

2. Enter the repository

```
cd N.Y-here-we-go
```

3. Install the projects dependencies

```
npm i
```

4. Copy .env.example

```
cp .env.example
```

5. ⚠️ Now we're going to fill the environmet variables needed

- **REACT_APP_LOGIN**: This is the login of your application (I implemented this level of security just to not let the application open to everyone so easily);

- **REACT_APP_PASS**: This is the password of your application;

- **REACT_APP_NOTION_API_KEY**: You'll need to generate a Key of your workspace to use the Notion API, [find out how to generate this key](https://daily-dev-tips.com/posts/getting-started-with-the-notion-api/).

- **REACT_APP_NOTION_DATABASE_ID**: You'll need to get the id for the database you want to show on the application, On the link below you can find out how to do that too.

- **REACT_APP_PROXY_URL**: Unfortunately the Notion API still don't have CORS origin error handling, so they don't recommend using it for web applications, to make it work I had to use a proxy and because of that you'll need too.

- **REACT_APP_NOTION_PAGE** (optional): The notion page where the database is set.


🥳 It's finished! Now you can use it however you want 🥳

## Contribute with us

If you find some bug or want to suggest a new feature please open an issue and we can discusse and work on it. Thank you for reading 'till here, Bye.









 
