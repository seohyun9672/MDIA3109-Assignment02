import Head from "next/head";
import styles from "../styles/Home.module.css";
import Category from "../comp/Category";
import { useEffect, useState } from "react";
import Card from "../comp/Card";
import { useRouter } from "next/router";
import data from "../public/data/recipes.json";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [header, setHeader] = useState("Popular");
  const router = useRouter();

  var cats = [
    {
      src: "/imgs/heart.svg",
      name: "Popular",
    },
    {
      src: "/imgs/pizza.svg",
      name: "Pizza",
    },
    {
      src: "/imgs/cuisine.svg",
      name: "Cuisine",
    },
    {
      src: "/imgs/dessert.svg",
      name: "Desserts",
    },
    {
      src: "/imgs/drink.svg",
      name: "Drinks",
    },
    {
      src: "/imgs/salad.svg",
      name: "Salad",
    },
  ];

  useEffect(() => {
    setRecipes(data);
  }, []);

  useEffect(() => {
    if (header === "Popular") {
      getPopularRecipes();
    }
  }, [header]);

  const getPopularRecipes = () => {
    let popularRecipes = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].rating > 4.9) {
        popularRecipes.push(data[i]);
      }
    }

    let mostPopular = popularRecipes
      .sort(() => Math.random() - Math.random())
      .slice(0, 10);

    setRecipes(mostPopular);
  };

  const sortRecipes = (categoryName) => {
    const recipeNames = new Set();
    const sortedRecipes = [];

    for (var i = 0; i < data.length; i++) {
      if (data[i].cuisine_path.includes(categoryName)) {
        const recipeName = data[i].recipe_name;
        if (!recipeNames.has(recipeName)) {
          sortedRecipes.push(data[i]);
          recipeNames.add(recipeName);
        }
      }
    }
    setRecipes(sortedRecipes);
  };
  const handleCardClick = (id) => {
    router.push({
      pathname: "/recipes",
      query: { id: id },
    });
  };

  return (
    <>
      <Head>
        <title>Find Recipes</title>
        <meta name="author" content="Anna Jeong" />
        <meta property="og:title" content="Assignment #2 - Home Page" />
        <meta name="description" content="Find Recipes App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgs/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>What would you wish to cook?</h1>
          <div id="scollbar" className={styles.catCont}>
            {cats.map((cat, i) => {
              return (
                <Category
                  key={i}
                  text={cat.name}
                  src={cat.src}
                  handleClick={() => {
                    setHeader(cat.name), sortRecipes(cat.name);
                  }}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.container}>
          <h2>{header}</h2>
          <div id="popular" className={styles.cardCont}>
            {recipes &&
              recipes.map((recipe, i) => {
                return (
                  <Card
                    key={i}
                    title={recipe.recipe_name}
                    src={recipe.img_src}
                    ratings={recipe.rating}
                    servings={recipe.servings}
                    unit={recipe.servings > 1 ? "servings" : "serving"}
                    time={recipe.total_time}
                    handleClick={() => handleCardClick(recipes[i].id)}
                  />
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
}
