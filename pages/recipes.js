import { useState, useEffect } from "react";
import styles from "../styles/Recipes.module.css";
import Head from "next/head";
import Back from "../comp/Back";
import List from "../comp/List";
import { useRouter } from "next/router";
import recipes from "../public/data/recipes.json";

export default function Recipe() {
  const [img, setImg] = useState("");
  const [description, setDescription] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [title, setTitle] = useState("Food Name");
  const [time, setTime] = useState("");
  const [rating, setRating] = useState(0);
  const [servings, setServings] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // console.log(id);
    if (id) {
      const recipe = recipes[id];
      setTitle(recipe.recipe_name);
      setImg(recipe.img_src);
      setTime(recipe.total_time);
      setRating(recipe.rating);
      setServings(recipe.servings);
      setIngredients(recipe.ingredients.split(", \n"));
      setDescription(recipe.directions.split(/[:.]/));
    }
  }, [id]);

  var arr = [
    {
      name: "rating",
      src: "/imgs/star.svg",
    },
    {
      name: "servings",
      src: "/imgs/servings.svg",
    },
    {
      name: "total_time",
      src: "/imgs/time.svg",
    },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Anna Jeong" />
        <meta property="og:title" content="Assignment #2 - Recipe Page" />
        <meta name="description" content="Recipe Detail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgs/favicon.png" />
      </Head>
      <main className={styles.main} id="main">
        <Back />
        <div className={styles.container}>
          <div className={styles.recipeDetail}>
            <img src={img} className={styles.image} id="image-detail" />
            <div className={styles.container}>
              <h1 id ="header" className={styles.header}>{title}</h1>
              <div className={styles.detailCont} id="detail-container">
                {rating && (
                  <div className={styles.detail}>
                    <img src={arr[0].src} />
                    <div>{rating}</div>
                  </div>
                )}
                {servings && (
                  <div className={styles.detail}>
                  <img src={arr[1].src} />
                    <div>
                      {servings} {servings > 0 ? "servings" : "serving"}
                    </div>
                  </div>
                )}
                {time && (
                  <div className={styles.detail}>
                  <img src={arr[2].src} />
                    <div>{time}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.list}>
              <h2>Ingredients</h2>
              <ul className={styles.listItem}>
                {ingredients.map((o, i) => {
                  return <List key={i} text={o} />;
                })}
              </ul>
            </div>
            <div className={styles.list}>
              <ul className={styles.listItem}>
                <h2>Instruction</h2>
                {description.slice(0, -1).map((o, i) => {
                  return <List key={i} text={o} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
