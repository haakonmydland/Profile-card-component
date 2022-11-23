import { CardInterface } from "./types";
import style from "./Card.module.css";
import { nFormatter } from "./NumberFormatter";

export const Card = ({
  HeaderImage,
  ProfileImage,
  Name,
  Age,
  Location,
  Followers,
  Likes,
  Photos,
}: CardInterface) => {
  return (
    <div className={style.Card}>
      <div className={style.Header}>
        <img src={HeaderImage} className={style.HeaderImage} />
        <img src={ProfileImage} className={style.Profile} />
      </div>
      <div className={style.info}>
        <div>
          <h1 className={style.Name}>{Name ? Name : "Name"}</h1>
          <h2 className={style.Age}>{Age ? Age : "Age"}</h2>
        </div>
        <h2 className={style.Location}>{Location ? Location : "Location"}</h2>
      </div>
      <div className={style.SocialsContainer}>
        <div className={style.SocialsBox}>
          <h1 className={style.SocialNumber}>
            {Followers ? nFormatter(Followers) : "Followers"}
          </h1>
          <h2 className={style.SocialText}>Followers</h2>
        </div>
        <div className={style.SocialsBox}>
          <h1 className={style.SocialNumber}>
            {Likes ? nFormatter(Likes) : "Likes"}
          </h1>
          <h2 className={style.SocialText}>Likes</h2>
        </div>
        <div className={style.SocialsBox}>
          <h1 className={style.SocialNumber}>
            {Photos ? nFormatter(Photos) : "Photos"}
          </h1>
          <h2 className={style.SocialText}>Photos</h2>
        </div>
      </div>
    </div>
  );
};
