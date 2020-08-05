import React, { Component } from "react";
import "./Index.css";

class Index extends Component {
  render() {
    return (
      <div>
        <div className="container" id="about-me">
          <div className="row">
            <div className="col-sm">
              <h1>
                <strong>About Me</strong>
              </h1>
              <hr />
              <div className="container-fluid">
                <img
                  src="https://i.imgur.com/tL3dAdP.jpg?1"
                  alt=""
                  className="img-fluid float-left"
                />
              </div>
              <p>
                I was born in Suwanee, Georgia and lived there until I was about
                5. We then moved to Florida and we lived there until I was about
                10. After Florida, we moved to California for only a year and
                ended up coming back to Georgia. Since we've been back, we have
                moved around a couple more times and are currently in
                Alpharetta. I have most recently worked in retail and mostly
                retail throughout my career. I was a piercer at a tattoo shop
                for a little bit but decided it just wasn't for me. I decided I
                wanted to do something meaningful with my life and put myself
                into a better career, so I ended up in Georgia Tech's Fullstack
                Bootcamp. It has honestly been the best decision I have ever
                made. I love programming and I always have. My father is also a
                programmer and he used to show me all kinds of stuff when I was
                younger, and I am pretty much my father down to a T. So far I
                have learned about HTML, CSS, Javascript, jQuery, Ajax, and also
                how to make API calls.It has definitely been a rough three weeks
                trying to learn everything that goes into each. Javascript was
                by far the hardest one for me, so I'm thankful we moved on to
                jQuery. API calls have also been kind of a hard one for me, but
                I'm slowly getting the hang of it. I absolutely love HTML and
                CSS the best by far. I've always been about design and layouts.
                I have been drawing all of my life so of course that part came
                easy to me. I'm super excited to move on and learn even more
                languages. A couple of hobbies of mine include hiking with my
                dogs, going to the lake, and drawing. I have two dogs currently;
                a pitbull named Arkham and a border collie mix named Chloe. We
                actually rescued Chloe when we were visiting in colorado for the
                week. We decided it would be a better trip if we had a dog and
                it ended up being a split second decision, and it's honestly
                been one of the best decisions I've made so far.
              </p>
              <div>
                <a
                  href="https://github.com/a-mollenkopf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github Profile
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/alexis-mollenkopf-b90998111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div>
                <a
                  href="https://docs.google.com/document/d/16yrvYOM4_yT-5jHFFXrG3dnwwGFtKLc_-XXi-zpmpas/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume Link
                </a>
              </div>
              <a href="mailto: alexismollenkopf@gmail.com">
                alexismollenkopf@gmail.com
              </a>
              <div>
                <a href="tel:813-924-6825">813-924-6825</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
