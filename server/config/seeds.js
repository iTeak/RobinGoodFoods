const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Drinks' },
    { name: 'Merchandise' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Bagels',
      description:
        'Bagel.',
      image: 'bagel.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {croissants,
      name: 'Croissants',
      description:
        'Croissants.',
      image: 'croissants.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Coffee',
      category: categories[0]._id,
      description:
        'Coffee.',
      image: 'coffee.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Jam',
      category: categories[0]._id,
      description:
        'Jam.',
      image: 'jam.jpg',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Pancakes',
      category: categories[0]._id,
      description:
        'Pancakes.',
      image: 'pancakes.jpg',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Syrup',
      category: categories[0]._id,
      description:
        'Syrup.',
      image: 'syrup.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Tea',
      category: categories[0]._id,
      description:
        'Tea.',
      image: 'tea.jpg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Bread',
      category: categories[0]._id,
      description:
        'Bread.',
      image: 'bread.jpg',
      price: 9.99,
      quantity: 100
    },

    // Adding products for Drinks
    //Coffee
    {   
      name: 'Blonderoast Coffee',
      category: categories[1]._id,
      description:
        'Blonde roast coffee that has been roasted for a shorter period of time than medium and dark roast coffee.',
      image: 'blonderoast.png',
      price: 28.90,
      quantity: '32 Ounce'
    },
    {
      name: 'Darkroast Coffee',
      category: categories[1]._id,
      description:
        'Dark roast coffee which is bittersweet in taste, as well as decadent chocolaty flavor.',
      image: 'darkroast.png',
      price: 32.50,
      quantity: '30 Ounce'
    },
    {
      name: 'Frenchroast Coffee',
      category: categories[1]._id,
      description:
        'Perfect for k-cup brewers and people on-the-go and ready for a warm mug of good brew.',
      image: 'frenchroast.png',
      price: 43.00,
      quantity: '20 Ounce'
    },
    {
      name: 'Lightroast Coffee',
      category: categories[1]._id,
      description:
        'Light body and mellow flavors in our lightest roast. Balanced with smooth and rich flovours.',
      image: 'lightroast.png',
      price: 19.99,
      quantity: '10 Ounce'
    },
    {
      name: 'Mediumroast Coffee',
      category: categories[1]._id,
      description:
        'Not as dark and bold as the darker ones, but offer more complexity than a lighter roast.',
      image: 'mediumroast.png',
      price: 19.99,
      quantity: '10 Ounce'
    },
    //Tea
    {
      name: 'Black Tea',
      category: categories[1]._id,
      description:
        'English Breakfast is our most popular tea. To create this well-balanced blend, we carefully select the finest teas from four different regions, each with its own unique characteristics.',
      image: 'blacktea.png',
      price: 29.99,
      quantity: '30 Ounce'
    },
    {
      name: 'Blueberry lavender Tea',
      category: categories[1]._id,
      description:
      'Blueberry lavender Tea has the robustness from these regions is complemented by the softer and more subtle teas',
      image: 'blueberrylavendertea.png',
      price: 29.99,
      quantity: '30 Ounce'
    },
    {
      name: 'Camomile Tea',
      category: categories[1]._id,
      description:
      'Since 1969, Celestial Seasonings has been committed to creating the most flavorful and inspiring cup of tea. We source the highest quality herbs, teas and botanicals, like our cool whistling peppermint cultivated in the Pacific Northwest and our golden, floral chamomile grown in the fields of Egypt.',
      image: 'camomiletea.png',
      price: 19.99,
      quantity: '30 Ounce'
    },
    {
      name: 'Green Tea',
      category: categories[1]._id,
      description:
      'Our Decaffeinated Green Tea has a smooth taste and refreshing aroma that can be enjoyed hot or iced. Picked at the peak of flavor and naturally decaffeinated, the tea leaves are high in flavonoids and brew a full-bodied beverage that is light, fresh, and never bitter.',
      image: 'greentea.png',
      price: 9.99,
      quantity: '35 Ounce'
    },
    {
      name: 'Mint Tea',
      category: categories[1]._id,
      description:
      'BRING ON THE CALM WITH THIS WARM HERBAL TISANE- A nourishing wholesome blend of real Peppermint leaves that brings nutrition with every delectable sip.',
      image: 'minttea.png',
      price: 17.99,
      quantity: '20 Ounce'
    },
    {
      name: 'Turmeric Ginger Tea',
      category: categories[1]._id,
      description:
      'Turmeric Ginger is made by bringing water to a boil, adding turmeric, ginger, and cinnamon',
      image: 'turmericgingertea.png',
      price: 19.99,
      quantity: '20 Ounce'
    },

    //Adding Merchandise content
    {
      name: 'Black Hat',
      category: categories[2]._id,
      description:
      'Complete your look with this fitted Baseball Cap, your perfect wardrobe-essential accessory',
      image: ['backofblack.png', 'blackhat.png'],
      price: 29.99,
      quantity: 1
    },
    {
      name: 'White Hat',
      category: categories[2]._id,
      description:
      'Keeps you warm or cool, hypoallergenic, washable, packable, shapeable, water repellent or water resistant, lightweight.',
      image: ['backofwhitehat.png', 'whitehat.png'],
      price: 29.99,
      quantity: 1
    },
    {
      name: 'White long sleeve tshirt',
      category: categories[2]._id,
      description:
      'Made of cotton textile in a stockinette or jersey knit, which has a distinctively pliable texture compared to shirts made of woven cloth.',
      image: ['backofwhitelongsleeve.png','whitelongsleeve.png'],
      price: 19.99,
      quantity: 1
    },
    {
      name: 'White mug',
      category: categories[2]._id,
      description:
      'Cylindrical cool white mug for drinking tea or coffee',
      image: ['backofwhitemug.png','whitemug.png'],
      price: 9.99,
      quantity: 1
    },
    {
      name: 'RobinGoods Carry-On Travel Backpack - Black',
      category: categories[2]._id,
      description:
      'Carry-on travel backpack with internal, zippered laptop sleeve; ultra-flexible and lightweight; made of durable polyester',
      image: 'backpack.png',
      price: 49.99,
      quantity: 1
    },
    {
      name: 'Blanket',
      category: categories[2]._id,
      description:
      'Robingood blanket is made of 3 layers with a thicken and strong waterproof fabric on top, a soft cotton middle and a durable, moisture resistant PEVA fabric backing. ',
      image: 'blanket.png',
      price: 39.99,
      quantity: 1
    },
    {
      name: 'Cooler',
      category: categories[2]._id,
      description:
      'FULLY INSULATED: Lid and body Keeps the Ice up to 4 days in temperatures as high as 90°F, for easy carrying and lifting, Molded into the lid to keep drinks from spilling; fit up to a 30-oz. tumbler',
      image: 'cooler.png',
      price: 35.00,
      quantity: 1
    },
    {
      name: 'Popsocket',
      category: categories[2]._id,
      description:
      'Innovative 360 degree rotating finger holder for secure grip and extended thumb reach for smartphones, tablets and e-readers, as well as for cases.',
      image: 'popsocket.png',
      price: 9.99,
      quantity: 6
    },
    {
      name: 'Recipe Book',
      category: categories[2]._id,
      description:
      'Pull out your mixer and dust off those cake pans! It is time to flip on the oven and create your next favorite cake. With tens of thousands of Cake Confidence cookbook copies already sold worldwide',
      image: 'recipebook.png',
      price: 17.99,
      quantity: 1
    },
    {
      name: 'Sweatshirt',
      category: categories[2]._id,
      description:
      'Snug, secure fit through the body. Soft, lightweight, moisture wicking jersey fabric with brushed back',
      image: 'sweatshirtflippingfantastic.png',
      price: 29.99,
      quantity: 1
    },
    {
      name: 'Sweatshirt - Self Love',
      category: categories[2]._id,
      description:
      'This self love Sweatshirt is a EcoSmart mid-weight cotton/poly fleece with up to 5% of the poly fibers.',
      image: 'sweatshirtmoreselflove.png',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Teddy Bear',
      category: categories[2]._id,
      description:
      'A 1 foot tall plush teddy bear measures 12 inches from head to foot. N ot too large Not too tiny! fluffy and plump. It is portable and ideal for hugging. Teddy bear in the ideal size is suitable for all ages.',
      image: 'teddybear.png',
      price: 19.99,
      quantity: 1
    },
    {
      name: 'Totebag',
      category: categories[2]._id,
      description:
      '15"W x 16"H, made of 100% 5oz natural cotton, lock stitching inside, with compacted stitching throughout, including cross-stitching at the handles for maximum strength allowing the bag to hold up extra bearing capacity, which are much stronger than our competitors.',
      image: 'totebag.png',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Travel Bag',
      category: categories[2]._id,
      description:
      'Dry Wet Separated Tote Bag】The high density water resistant material can help you to separate dry items and wet items,if you have wet clothes or towel,you can put it in this crossbody bag. Dimensions H*W*T, 27x55x18cm /10.63*21.65*7.09 inch,0.6kg weight.',
      image: 'travelbag.png',
      price: 19.99,
      quantity: 1
    },
    {
      name: 'Umbrella',
      category: categories[2]._id,
      description:
      'Robinhood umbrella with dome-shaped canopy and stars design for maximum rain coverage and see-through visibility',
      image: 'umbrella.png',
      price: 15.00,
      quantity: 1
    },

    //Adding content for Food

    //Bagels
    {
      name: 'Blueberry',
      category: categories[1]._id,
      description:
      'Remix your morning with our organic blueberry bagels',
      image: 'Blueberry.png',
      price: 30.00,
      quantity: 10
    },
    {
      name: 'Classic',
      category: categories[1]._id,
      description:
      'Start your morning right with our classic organic bagel that will make your breakfast epic!',
      image: 'Classic.png',
      price: 30.00,
      quantity: 10
    },

    //Bread
    {
      name: 'Wheat',
      category: categories[1]._id,
      description:
      '100% Whole Wheat bread is baked with a rich taste you’ll love. Our bread is free from artificial preservatives, colors and flavors with No Added Nonsense..',
      image: 'Wheat.png',
      price: 28.66,
      quantity: 20
    },

    {
      name: 'White',
      category: categories[1]._id,
      description:
      'With the classic white bread taste the whole family loves and 8 grams of whole grains per serving, Healthy Habits White made with Whole Grain bread means you don’t have to choose between the delicious taste you want and the whole grains you need.',
      image: 'White.png',
      price: 9.99,
      quantity: 100
    },

    //Croissants

    {
      name: 'Almond',
      category: categories[1]._id,
      description:
      'Soft & flaky. Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'almond.png',
      price: 36.00,
      quantity: 10
    },
    {
      name: 'Blueberry',
      category: categories[1]._id,
      description:
      'Savory and Sweet. Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'blueberry.png',
      price: 36.00,
      quantity: 10
    },
    {
      name: 'Chocolate',
      category: categories[1]._id,
      description:
      'A whole lot of chocolate plus the savory. Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'chocolate.png',
      price: 36.00,
      quantity: 10
    },
    {
      name: 'Original',
      category: categories[1]._id,
      description:
      'Soft and flavorful, they can be enjoyed on their own or topped with your favorite spreads or as the perfect complement to most any meal.',
      image: 'original.png',
      price: 36.00,
      quantity: 10
    },

    //Jam
    {
      name: 'Blackberry',
      category: categories[1]._id,
      description:
      'Bursting with fresh blackberry taste, thick, yet easily spreadable No Artificial Flavors or Colors No High-Fructose Corn Syrup.',
      image: 'blackberry.png',
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Blueberry',
      category: categories[1]._id,
      description:
      'Take the sweet intensity of wild Maine blueberries and add the perfect amount of sugar and a splash of lemon.',
      image: 'blueberry.png',
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Lavender',
      category: categories[1]._id,
      description:
      'Aromatic. Made from organic lavender, jam is a tasty example of pure simplicity. Its subtle flavor and sweet taste makes it a fun and interesting complement to baking and cooking recipes. ',
      image: 'lavender.png',
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Plum',
      category: categories[1]._id,
      description:
      'Our jam is made with ripened, tender plums that feature smooth, sweet favors that are perfect for savory flavor combinations. The plums’ natural flavors combine beautifully with bread, cheese, ice cream and more!.',
      image: 'plum.png',
      price: 35.00,
      quantity: 1
    },

    {
      name: 'Raspberry',
      category: categories[1]._id,
      description:
      'Bursting with the intense flavors of generously sized chunks of rapsberries, jam will delight all raspberries lovers with its delicious and mouth watering taste.',
      image: 'raspberry.png',
      price: 35.00,
      quantity: 1
    },

    // Pancakes

    {
      name: 'Apple Cinnamon with Amla',
      category: categories[1]._id,
      description:
      'The Apple Cinnamon mix is deliciously balanced with whole grains, dates, apple and sweet potato for the mind, body and planet.',
      image: 'pancakeapplecinnamon.png',
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Blueberry with Ashwagandha',
      category: categories[1]._id,
      description:
      'Our Blueberry mix is deliciously balanced with whole grains, blueberries and zucchini for the mind, body and planet.',
      image: 'pancakeblueberry.png',
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Classic with Reishi',
      category: categories[1]._id,
      description:
      'Our Classic mix is deliciously balanced with whole grains and good for the mind, body and planet.',
      image: 'pancakeclassic.png',
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Matcha with Goji Berry',
      category: categories[1]._id,
      description:
      'Our Matcha mix is deliciously balanced with whole grains, matcha and goji berries for the mind, body and planet.',
      image: 'pancakematcha.png',
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Turmeric Cinnamon with Ginger',
      category: categories[1]._id,
      description:
      'Our Turmeric mix is deliciously balanced with whole grains and good for the mind, body and planet.',
      image: 'pancaketurmeric.png',
      price: 13.00,
      quantity: 1
    },

    {
      name: 'Protein with Chocolate Chip',
      category: categories[1]._id,
      description:
      'Our Chocolate Chip mix is deliciously balanced with whole grains and good for the mind, body and planet.',
      image: 'pancakeprotein.png',
      price: 13.00,
      quantity: 1
    },

    //Syrup

    {
      name: 'Amber',
      category: categories[1]._id,
      description:
      'Our amber grade syrup has the most balanced flavor profile making it great for all-around use, perfect for those who do not want an overwhelming amount of maple flavor.',
      image: 'amber.png',
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Blueberry',
      category: categories[1]._id,
      description:
      'Our sugar free Blueberry Syrup uses the finest & fresh blueberries and a touch of lemon juice to recreate that familiar citric taste of homemade preserves. .',
      image: 'blueberrysyrup.png',
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Dark',
      category: categories[1]._id,
      description:
      'Our dark grade syrup os a favorite among maple lovers, produced late in the season when the sap runs less sweet. It is all natural and all locally produced with no additives of any kind.',
      image: 'darksyrup.png',
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Golden',
      category: categories[1]._id,
      description:
      'our golden syrup is delicious sugar syrup made by the evaporation of cane sugar juice. Golden Syrup is a favorite with chefs all over the world because of the sweet buttery flavor it adds to foods that improves the flavor of everything from pancakes to pecan pie.',
      image: 'goldensyrup.png',
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Lavender',
      category: categories[1]._id,
      description:
      'Aromatic and floral, lavender is embraced for its calming, soothing properties. Our Lavender Syrup adds semi-sweet, herbal floral flavor and beautiful, light purple color to cocktails, lemonades, sodas and more. ',
      image: 'lavendersyrup.png',
      price: 26.50,
      quantity: 1
    },

    {
      name: 'Mint',
      category: categories[1]._id,
      description:
      'French children are partial to Teisseire syrups and mint is one their favorite flavors. Diluted in plain or sparkling water, Teisseire syrups add a colorful touch to afternoon snacks. The origin of Teisseire dates back to the early 18th century, when Mathieu Teisseire started making fruit based beverages. Today Teisseire makes the most popular syrups in France.',
      image: 'mintsyrup.png',
      price: 26.50,
      quantity: 1
    }

  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
