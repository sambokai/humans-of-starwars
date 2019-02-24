import React from "react";

const About = () => {
  const url = `https://codesandbox.io/s/${window.location.host.split(".")[0]}`;
  return (
    <div>
      <h1>Dear applicant,</h1>

      <p>
        Congratulations you have taken the first hurdle! We are sending you this
        coding challenge which means that you have made a good impression and we
        want to know more about your code style.
      </p>

      <p>
        we have set up this basic project for you to work with. Please extend
        this react application by querying the Star Wars GraphQL API.
      </p>

      <p>The application should have three routes.</p>

      <p>
        The first route (/) should display a search bar where users can enter a
        name. After submitting the query the page should also display a list
        with the names of all humans in the Star Wars database whose names match
        the entered string.
      </p>

      <p>
        Each list entry should also be a link to the second route (/person/:id).
        This page should display some of the given person's individual
        characteristics of your choice.{" "}
      </p>

      <p>
        Bonus task: Display the list of humans who played with this person in at
        least two consecutive movies, with the links leading to their profile
        pages.
      </p>

      <p>
        The third route (/history) should list all the humans which the user
        already has looked at (e.g. visited the detail page) in the current
        session. You can use the redux store to keep this information.
      </p>

      <p>
        On top of all of the routes should be a main navigation menu with links
        to the 'Search' and 'History' routes.
      </p>

      <p>
        Think about how to structure and test the app. Consider solving bonus
        task only when you're done with the rest of you app.
      </p>

      <p>
        Open this url to start editing: <a href={url}>{url}</a>
      </p>

      <p>
        Good luck!<br />
        Web Development Team
      </p>
    </div>
  );
};

export { About };
