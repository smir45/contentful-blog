import React from "react";
import marked from "marked";
import "../styles/post.css";
import { Link  } from 'react-router-dom'

const Post = ({ article }) => {
  console.log(article);

  const { title, image, slug, desc, author } = article.fields;
  const postDesc = marked(desc);
  return (
    <div className="post">
      <Link className="link-post" to={`/fullpost/${title}`}>
     
      <section className="desc-sec-container">
        {image && (
          <img className="featured-image" id="featured-image-active" alt={image} src={image.fields.file.url} />
        )}

        <div className="desc-elements" id="desc-elements-active">
          <h1 className="title">{title}</h1>
          {author && (<p className="author">Author: {author}</p>)}
          <section
            className="desc-sec"
            dangerouslySetInnerHTML={{ __html: postDesc }}
          />
          <p className="readmore">read more...</p>
          
        </div>
      </section>
      </Link>
     
    </div>
  );
};

export default Post;
