# AmIWorthy Diamond Price Calculator

### Right Off the Bat

Right off the bat, I'd like to say that as a Junior Developer, I have never used the Adonis framework, or any NodeJS framework for that matter. In a matter of a day, I was able to learn my way around this MVC, and familiarize myself with new syntax that helped me build this feature.

 Although it is similar to other frameworks I have experience with, I felt that it still was a huge learning experience for me, and whether I get invited for an onsite or not, I wanted to say thanks for giving me the opportunity to learn something new!

### Description

This is the coding challenge presented to me by the Worthy Dev team.
This calculator has to be installed and run locally to work as it is not hosted on any platform.

The calculator gives the average quote of the selling price for a certain diamond given its cut, 
carat weight, color, shape, and clarity. 

### Assumptions

As I have no clue how diamonds are priced in today's market, I looked up other price calculators for diamonds
that are supposed to perform similarly. I was able to derive some pricing variations given the calculator, and I came up with a system of differentials that distinguish between the tiers. Those can be seen in the ``databse/seeds/DiamondSeeder.js`` file. 

This is the calculator that I used to get some pricing info to make it a bit more realistic:
[Washington Diamon Calculator](https://www.washingtondiamond.com/pages/diamond-price-calculator)

### Higher Order of Explanation

Since I have no experience with Adonis, I battled with each of these phases throughly, but nonetheless came out victorious after all.

Primarily, I created a database with a migration for my Diamonds table. I created the schema so that each of the Diamond instances in the database has the columns of cut, shape, color, carat, and clarity. 

Once that was out of the way, I created a plain boilerplate model for the Diamond just so that I could persist it to the database as I created the sales in the seed file. 

After I got that done, the real challenging part was figuring out how to price the diamond sales and what is the exact syntax to use to achieve that. Surprisingly, the Adonis Docs were really helpful, so most of my time was spent on figuring out how to make the prices look somewhat realistic while maintaining the idea that as they increase in their quality the price itself increases as well. 

I came up with a makeshift system that basically randomizes a diamond and its characteristic and the sale price is added according to a JSON object I created, giving it a decently fair price that isn't too far from the better diamond calculators out there. And all of this is happening as I am seeding my database at ```databse/seeds/DiamondSeeder.js```

After the database was seeded the real annoying part came about which led me to create a simpler HTML form for this project. For some reason, I couldn't get the views routes to route properly with the Adonis syntax for the life of me, and the Adonis docs were not too helpful on this one, which threw me off for a while. I figured out that the routes work in a way that it would render the first route in line on the `routes.js` file, so if I wanted to render a specific route through a get method, it has to come before the plain `/` route for the home screen. 

After I relished in my outstanding victory at the Battle of Routes, I delved deeper into figuring out how to properly get the info from the database, which was somewhat a refresher for my SQL knowledge. Obviously, this had to have been done in the controller so I went ahead and created an index controller in ```app/Controllers/DiamondController.js```. Luckily, Adonis makes it super easy to parse a fetch request alongside its highly intuitive ORM, making the data flow into and out of the database a total breeze. 

Finally, still in my controller, I created a small but powerful `avg(arr)` method that accepts an array of Diamond instances and averages the selling price out. That function takes care of edge cases like having `if (caratWeight < 0.5 || caratWeight > 1.5)` as well as the good ol' `if(arr.length === 0)` both cases would return a string saying that we just dont mess with those kind of sales and that we are better off that way anyhow :).

And that's about it. This was fun to write, and looking at it now I feel so nerdy knowing all of these terms, `AND I'M LOVING IT`!

I hope this works for you because I really believe in this product and would love to work on it!

Thanks!

## Setup

Manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Seed 

Run ``` adonis seed ``` to seed the database and get a good feel of the calculator.

### Calculator

Run ```adonis serve``` to make your machine the host for the calculator.
Go to ```localhost:3333```
`ENJOY`
