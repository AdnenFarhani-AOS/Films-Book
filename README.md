
# Films Book Employees
## ReactJs - TailwindCss - Sass - ReduxToolkit - ReactRouter 
![Logo](https://f.top4top.io/p_2243pwc581.png)
 # Intro :
  This app is developed as an exemple test for the employees of the Betsson group to give
          them a quick glimpse of the latest movies in their spare time at work .
In this version i used REACTJS , TAILWINDCSS , SASS , ReduxToolkit , ReactRouter, to have some beautiful and friendly components to enjoy the app .
 # Demo :
 **Live Demo: https://film-book-employees.netlify.app/**

![screenshot](https://e.top4top.io/p_2243odkvx1.jpg)
 # Setup (FrontEnd)

1- Clone this repo
```shell
git clone https://github.com/AdnenFarhani-AOS/Films-Book.git
cd Films-Book
```

2- Install dependencies
```shell
npm install
```

3- Run Server
```shell
npm start

Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.
```
 # Backend

I used Wordpress As a headless cms , to manage the application content : 

Content Type
```shell
- Posts ( films ) ,
- Film Categories 
```


## API Reference

#### Get all Films

```http
  GET https://cms-film.adnenfarhani.tech/wp-json/bf-api/v1/posts 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | If you want to filter by name
| `category` | `string` | If you want to filter by c&tegory

#### Get Film

```http
  GET https://cms-film.adnenfarhani.tech/wp-json/bf-api/v1/posts/{slug} 
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `slug`      | `string` | **Required**. slug of film to fetch |


#### Get all categories

```http
  GET https://cms-film.adnenfarhani.tech/wp-json/bf-api/v1/categories 
```

#### Get Popular films

```http
  GET https://cms-film.adnenfarhani.tech/wp-json/bf-api/v1/popular_posts 
```

