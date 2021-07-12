import React from "react";
import marked from "marked";
import "../styles/post.css";

const post = ({ article }) => {
  console.log(article);

  const { title, image, slug, desc } = article.fields;
  const postDesc = marked(desc);
  return (
    <div className="post">
      <section className="desc-sec-container">
        {image && (
          <img className="featured-image" src={image.fields.file.url} />
        )}

        <div className="desc-elements">
          <h1 className="title">{title}</h1>
          <section
            className="desc-sec"
            dangerouslySetInnerHTML={{ __html: postDesc }}
          />
        </div>
      </section>
    </div>
  );
};

export default post;
