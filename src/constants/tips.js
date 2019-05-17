const tips = [
  {
    title: "Strive for at least 150 minutes of exercise per week",
    description:
      "Break it down to 40 minutes 4 days a week, 30 minutes 5 days a week, or however you’d like! Choose what works best for your lifestyle.",
  },
  {
    title: "Cut your coffee calories",
    description:
      "Cut calories in your morning cup of coffee by skipping the cream and sugar. Instead, try drinking it black or reducing your amount of each.",
  },
  {
    title: "Keep a fitness journal",
    description:
      "Tracking keeps you accountable, and studies show that those who keep journals are more successful at weight loss than those who don’t.",
  },
  {
    title: "Pay attention to your thoughts",
    description:
      "Thoughts are powerful; bring awareness to yours. Do you encourage yourself with positivity or hold yourself back with negativity? A change in mindset could be all it takes to get your health on track.",
  },
  {
    title: "Eat the rainbow",
    description:
      "Eat foods that are closest to their natural state as possible. Aim for whole, fresh foods in a rainbow of colors.",
  },
  {
    title: "Avoid processed foods",
    description:
      "Watch out, because processed foods have multiple negative side effects. Generally speaking, the fewer the ingredients, the better the food. Taking a quick look at food labels can tell you a lot, but ideally, the majority of food you buy doesn’t need a label.",
  },
  {
    title: "Drink water",
    description:
      "Most adults need about two quarts of fluid per day to replace normal water loss, or approximately eight 8-ounce glasses of water per day. Try this hydration calculator to check your personalized H2O needs.",
  },
  {
    title: "Protein up",
    description:
      "Add protein powder to smoothies for an added boost. Choose unflavored powders for versatility.",
  },
  {
    title: "Find your “why”",
    description:
      "Identify your deeper reason to get healthy other than the number on the scale. Do you want to be able to run with your children or grandchildren? How about being able to enjoy food without feeling guilty all the time? Staying in touch with a deeper reason for health can motivate you to keep going when things get tough.",
  },
  {
    title: "Do workouts you enjoy",
    description:
      "Find a form (or two!) of movement you truly enjoy. It’s easier to stick to things we look forward to rather than dread.",
  },
  {
    title: "Incorporate strength training",
    description:
      "Add some muscle building activities to your workouts. Free weights, resistance band exercises, muscle sculpt classes or using your body weight with push-ups, planks and squats all work.",
  },
  {
    title: "Set perfectionism aside",
    description:
      "Keep in mind that striving for perfection usually leads to disaster. Set small goals and stair step your way to success by developing healthy habits.",
  },
  {
    title: "Don’t DIET",
    description:
      "Reverse the letters in the word and EDIT what you eat. Make it a lifestyle change toward healthier foods, not a deprivation plan.",
  },
  {
    title: "Take recovery days",
    description:
      "Give yourself one to two days a week for active recovery. Take a walk. Do a gentle yoga class. Just engage in something that’s less intense than what you do for exercise the other days of the week.",
  },
  {
    title: "Keep healthy snacks on hand",
    description:
      "Select healthier choices to have on standby in your fridge when hunger pangs or emotional eating strikes, such as a bowl of fresh strawberries or blueberries. Here are some healthy snacks to try whenever cravings strike.",
  },
  {
    title: "Follow the 80/20 rule",
    description:
      "Eat healthy 80 percent of the time. Indulge occasionally, but make sure most of your choices are healthy.",
  },
  {
    title: "Shop the perimeter of your grocery store",
    description:
      "Food tends to be the healthiest and less processed on the outside edges of most grocery stores. Here you’ll find fresh fruit and veggies, raw meat and fresh seafood.",
  },
  {
    title: "Don’t just focus on the scale",
    description:
      "Find different ways to measure success other than stepping on the scale. Instead, pay attention to how you feel after you’ve been working out consistently.",
  },
  {
    title: "Get an accountability partner",
    description:
      "Working out in groups can offer more benefits than working out alone – science supports it! Find your go-to person for exercise and weight loss support. Exercise together, share tips and swap encouragement.",
  },
  {
    title: "Try working out in the morning",
    description:
      "While the time of day makes no difference when it comes to results, you may be more likely to make excuses as the day goes on.",
  },
  {
    title: "Display your results",
    description:
      "Whether it’s the pounds you have lost, how many times you worked out this week, or a picture of you showing off results, display it to motivate you to keep it up!",
  },
  {
    title: "Track your workout schedule",
    description:
      "Circle the days on a calendar when you’ve worked out, or mark it on your phone. That way, you can feel proud of your successes and be able to repeat the schedule that worked for you in the past.",
  },
  {
    title: "Build muscle",
    description:
      "Want to speed up your metabolism? Building muscle is the key since muscle burns more fat at rest.",
  },
  {
    title: "Two pounds at a time",
    description:
      "Don’t overwhelm yourself with your ideal goal weight. When you are down two pounds, let yourself feel proud and then think about the next two.",
  },
  {
    title: "Eat smaller portions",
    description:
      "Portion control is crucial – especially when you are eating an indulgent food. These portion control tips can help you get started.",
  },
  {
    title: "Use gym-wear as motivation",
    description:
      "Buy a new workout top, headband, or piece of equipment. Having something new can motivate you to actually use it!",
  },
  {
    title: "Eat slowly",
    description:
      "Put your fork down in between bites to keep from overeating. When you eat more slowly, you allow your mind to recognize when your body is full.",
  },
  {
    title: "Treat yourself",
    description:
      "Pat yourself on the back for all your hard work with a massage, your favorite TV show, or draw yourself a nice, relaxing bath. Just make sure your “treat” doesn’t sabotage your success: like a pint of Ben & Jerry’s 😉",
  },
  {
    title: "Make a list of positive affirmations",
    description:
      "Here’s a few to get you started: I love to exercise. I want to live a healthy life. I am getting more fit each day.",
  },
  {
    title: "Don’t beat yourself up",
    description:
      "There’s no such thing as “cheating”. Don’t be too hard on yourself. Empower yourself to make a better choice next time.",
  },
  {
    title: "Make fitness a top priority",
    description:
      "Put your health goals at the top of your priority list. If you’re constantly taking care of everyone else, you’ll never have time to take care of yourself!",
  },
  {
    title: "Swap a bad decision with a good one",
    description: "When in doubt, go with the healthy alternative!",
  },
  {
    title: "Don’t skip multiple workouts",
    description:
      "Try to never go more than two days in a row without exercise, unless of course you are injured or ill. This applies to your vacations too! Remember: not all workouts have to be high-intensity. Try these low-intensity workouts for the days it’s hard to muster up the energy.",
  },
  {
    title: "Eat mindfully",
    description:
      "Pay attention to what you are eating. Ask yourself if you really are hungry or if something else is going on that’s causing you to turn to food. The HALT method can be helpful – ask yourself if you are Hungry, Angry, Lonely, or Tired. Emotions can trick us into thinking we’re hungry when we’re not.",
  },
  {
    title: "Just keep going",
    description:
      "Don’t start and stop, just keep going. If exercise is new to you, start off slow and aim for a few workouts per week and then increase as you go.",
  },
  {
    title: "Create measurable goals you can check off",
    description:
      "These should be smaller things that take you only a couple of weeks to accomplish. You can have your ultimate goal, but if it’s years out, motivation can wane.",
  },
  {
    title: "Don’t stuff yourself",
    description: "Stop eating when you feel satiated, not stuffed.",
  },
  {
    title: "Make an irritation list",
    description:
      "Oftentimes, what’s getting us down are a bunch of little irritants rather than one looming problem.",
  },
  {
    title: "Try a standing desk",
    description:
      "If you have a desk job, consider a standing workstation. Or at the very least, stand up or pace when you use the phone. People in constant motion burn more calories.",
  },
  {
    title: "Drink tea",
    description:
      "Drink caffeinated tea as an afternoon pick-me-up or decaf tea as a way to wind down at night. There are so many health benefits to tea including: lowering blood pressure, reducing wrinkles, aiding in weight loss and more.",
  },
  {
    title: "Set rules that work for you",
    description:
      "Many people who have successfully lost weight and kept it off have set rules for themselves.",
  },
  {
    title: "Make a habit list",
    description:
      "Make a list of bad habits you are willing to give up and the good habits you will start.",
  },
  {
    title: "Invest in a water bottle",
    description:
      "Get a stainless steel portable water bottle to take with you everywhere. Using less plastic is good for the environment.",
  },
  {
    title: "Push your limits",
    description:
      "Change your limits and surprise yourself. When you mentally and physically push the line, it will motivate you to keep going—or set your sights higher.",
  },
  {
    title: "Burn more calories than you eat",
    description:
      "It takes a deficit of 3,500 calories to lose one pound. If weight loss is your goal, your caloric intake should be less than your calories burned.",
  },
  {
    title: "Use a foam roller",
    description:
      "Foam roll to relieve tight muscles and achy joints. Foam rollers are affordable and easy to use; aim for about three times a week for best results.",
  },
  {
    title: "Read others’ success stories as motivation",
    description:
      "Learning about others’ success can encourage you to keep going and believe in your own.",
  },
  {
    title: "Try HIIT",
    description:
      "Ramp up the intensity on your workouts to rev up your metabolism and break through a plateau. Try High Intensity Interval Training (HIIT) workouts to give yourself a boost.",
  },
  {
    title: "Keep track of calories",
    description:
      "People have the tendency to underestimate the calories they consume. Tracking your calories for a week or two can be helpful in getting an honest assessment of how many calories you’re eating per day. Don’t skip anything – you’ll only hurt yourself by not being honest.",
  },
  {
    title: "Make movement part of your life",
    description:
      "Think of exercise and movement as an all day thing. Just because you got in a 45-minute workout in the morning doesn’t mean you should sit on the couch the rest of the day.",
  },
  {
    title: "View each day as a clean slate",
    description:
      "Practicing self compassion means not beating yourself up after a day that fell short of your healthy living goals.",
  },
  {
    title: "Trade soda for sparkling water",
    description:
      "Sparkling water still has the carbonation you’re used to but will save you tons of calories, not to mention the artificial colors and sweeteners.",
  },
  {
    title: "Ditch comparisons",
    description:
      "Don’t compare yourself to others; focus on your own progress instead.",
  },
  {
    title: "Try yoga",
    description:
      "Yoga can help you feel centered (among other benefits). It stretches and strengthens your body, improves your breathing and awareness, and empowers your mind.",
  },
  {
    title: "Get enough sleep",
    description:
      "How much and the quality of the sleep you get can directly affect your appetite. Try this sleep calculator to find out the right bedtime or wake time for you.",
  },
  {
    title: "Find music that motivates",
    description:
      "Music can help take your workout up a notch if it’s music that appeals to you.",
  },
  {
    title: "Indulge in small portions",
    description:
      "When a craving strikes, it’s best to find a reasonable, healthy substitute that might still appeal to you. If not, allow yourself to indulge in a craving, but do so in small portions. Remember the 80/20 rule.",
  },
  {
    title: "Use the right footwear",
    description:
      "Make sure your footwear is suitable for your workouts. Everything from ankle, knee, and hip pain can be aggravated or even caused by improper footwear.",
  },
  {
    title: "Don’t be afraid of fat",
    description:
      "Healthy fat, that is. MUFAs, or monounsaturated fatty acids can actually keep you satiated and aid in weight loss. Nuts, seeds, olive oil, olives, avocados, and dark chocolate all make the cut.",
  },
  {
    title: "Try circuit training",
    description:
      "Circuit style workouts combine multiple different exercises and charge your metabolism while helping you shed pounds.",
  },
  {
    title: "Eat more greens",
    description:
      "Kale, spinach, broccoli, Swiss chard or collard greens. Greens are full of fiber, vitamins and minerals to protect you against disease.",
  },
  {
    title: "Never dine at your desk",
    description:
      "Tempted to stay near your computer through lunch? Don’t do it, your meal will be less satisfying and you’ll be more likely to want more food soon after.",
  },
  {
    title: "Don’t forget to warm up",
    description:
      "Without a proper warm up for your body, you’re likely to exacerbate joint and/or muscle pain and cause injury during your workout.",
  },
  {
    title: "Cook at home as much as you can",
    description:
      "You’re better able to control all the ingredients and stay away from excess calories. Try these easy, healthy recipes for inspiration.",
  },
  {
    title: "Get your five servings",
    description: "Aim to eat five servings of fruits and veggies daily.",
  },
  {
    title: "Be consistent",
    description:
      "Use consistency to compound your results. It’s not what you do once in a while that counts, it’s what you do each day.",
  },
  {
    title: "Follow your favorite fitness gurus",
    description:
      "Follow fitness accounts on social media and use them as daily motivation, inspiration and encouragement.",
  },
  {
    title: "Try a fitness app",
    description:
      "Fitness apps are a great way to track your progress at your fingertips. Find your favorite one and use it as an accountability tool. Here are some good apps to start with.",
  },
  {
    title: "Plan ahead",
    description:
      "Use Sundays as prep days to eat healthy all week. Get enough produce and staples needed for the week.",
  },
  {
    title: "Snack on popcorn",
    description:
      "When you’re in the mood for a crunchy snack, try popcorn. It’s a low calorie food you can eat a lot of that also has the added benefit of fiber. Homemade is the best!",
  },
  {
    title: "Use races as motivation",
    description:
      "Commit to a 5k to motivate you to train. Plus, you just may find out that the energy of the supportive crowds really motivates you to keep jogging—long after the race.",
  },
  {
    title: "Stretch, stretch, stretch",
    description:
      "This is so important, we said it three times. Be sure to stretch after exercise. If you can loosen your muscles post-workout, you’ll have happy joints ready to go for your next sweat session and less pain.",
  },
  {
    title: "Ramp it up slowly",
    description:
      "If you hate exercise, make incremental changes each week. Aim for 20 minute workouts at first, then increase your time.",
  },
  {
    title: "Work out at home",
    description:
      "Skip the gym membership fee and the commute and work out at home. Join me on Get Healthy U TV for tons of full length workout videos and workout calendars.",
  },
  {
    title: "Beware of fitness fads",
    description:
      "Don’t try fads and gimmicks. If it sounds too good to be true, it probably is. Losing weight takes time and hard work, but you can do it.",
  },
  {
    title: "Be prepared in the morning",
    description:
      "The morning frenzy is real. Freeze a few fruit smoothies to grab on the go in the early mornings so you can stick to your plan without any hassle.",
  },
  {
    title: "Drink lemon water",
    description:
      "Drink lemon water in the morning to hydrate and balance pH levels. Alternatively, dilute one teaspoon to a maximum of two tablespoons of apple cider vinegar in water. Start small and increase as you can handle the taste.",
  },
  {
    title: "Think of workouts like appointments",
    description:
      "Schedule your workouts just like you would any other appointment and stick to it. You wouldn’t no-show a meeting at work or a doctor’s appointment; don’t no-show your workouts either.",
  },
  {
    title: "Keep alcohol to a minimum",
    description:
      "Don’t overdo it on cocktails. If you’re gonna have a drink, a good choice is red wine. Red wine also has antioxidants, making it good for your heart. Liquid calories add up fast, so opt for one glass only.",
  },
  {
    title: "Make a green smoothie for breakfast",
    description:
      "Try this green smoothie recipe: frozen banana, pineapple, almond milk, coconut extract, kale and spinach.",
  },
  {
    title: "Don’t get too stuck in routine",
    description:
      "Same habits equal same results. If you aren’t getting results, change what you are doing.",
  },
  {
    title: "Pay attention to serving sizes on labels",
    description:
      "Even if the label says only 100 calories, if you’re eating double the serving size, then you need to double the caloric number as well.",
  },
  {
    title: "Interval train",
    description:
      "Twice a week, instead of going at a steady pace for 30 minutes, go easy for 3 minutes and hard for 1 minute. Repeat this pattern 5-6x!",
  },
  {
    title: "Swap ice cream for Greek yogurt",
    description:
      "Finding yourself reaching for ice cream every night? Try Greek yogurt instead with a little honey, berries, and dark chocolate chips or walnuts.",
  },
  {
    title: "Be patient with weight loss",
    description:
      "Don’t expect the weight to come off fast. Be realistic! Remember: it takes time to gain weight; it takes time to lose it.",
  },
  {
    title: "Don’t go to parties hungry",
    description:
      "Only fill your plate up once with your favorite appetizers and then stop eating. This becomes a lot more reasonable if you eat a small, healthy meal or hearty snack before you go.",
  },
  {
    title: "Try a fitness tracker",
    description:
      "Fitness trackers range from pricey to less expensive, but one that can track your steps and your workouts can add increased motivation to your fitness journey.",
  },
  {
    title: "Snack-prep for busy schedules",
    description:
      "It’s always good to keep healthy snacks on you—especially if your schedule is crazy.",
  },
  {
    title: "Treat your injuries correctly",
    description:
      "Got an injury? Treat it with ice/cold therapy if it’s less than six weeks old. If it’s more than six weeks old, heat therapy is your best bet.",
  },
  {
    title: "Realize diet and exercise are intertwined",
    description:
      "Even if we don’t like it, exercise and your diet are married forever. You can’t lose weight with one and not the other— period. There’s no getting around it.",
  },
  {
    title: "Use exercise to boost your mood",
    description:
      "Exercise is a great stress reliever and mood booster. When you’ve had a rough day, going for an outdoor run or throwing a few punches in a kickboxing workout may be just what you need!",
  },
  {
    title: "Stick with your budget",
    description:
      "Eating healthy on a budget is possible. Instead of buying fresh fruits and vegetables, try buying frozen, especially when out of season. They’re packed at the peak of freshness; just be sure to check the labels to stay clear of brands with other additives.",
  },
  {
    title: "Be aware of your triggers",
    description:
      "Does an argument with your spouse or loved one typically send you to the fridge late at night? Or how about a stressful day at work triggering you to hit up the drive-through on the way home? Being aware of your triggers can cause you to recognize when they may occur and prevent bad choices.",
  },
  {
    title: "Cross train",
    description:
      "You still want that cardiovascular exercise to stay in the schedule, but change the activity you are doing.",
  },
  {
    title: "Prep hard-boiled eggs",
    description:
      "Make hard-boiled eggs at the beginning of the week for a ready-to-grab protein-packed snack you can eat by itself, or add to other items like avocado toast.",
  },
  {
    title: "Keep healthy snacks everywhere",
    description:
      "Be prepared for hunger to strike when on the go. Keep non-perishable, healthy snacks on hand in multiple locations like your car, in your gym bag and purse. That way you can always have a healthy option you can turn to when in a pinch.",
  },
  {
    title: "Develop a positive attitude",
    description:
      "Your thoughts determine how you feel and often determine what you can accomplish. As Napoleon Hill once said, “What your mind can conceive and believe, you can achieve.”",
  },
  {
    title: "Meditate",
    description:
      "We need more meditation and less medication. Meditating is easy to do and its benefits are numerous. Reduce stress, improve your health, get centered, breathe better and get focused.",
  },
  {
    title: "Reduce stress",
    description:
      "Stress produces higher levels of the stress hormone cortisol which can make you crave sweet and salty foods. Reducing your stress will not only help your mind, it can help your waistline! Try these relaxation tips to chill out.",
  },
  {
    title: "Take your vitamins",
    description:
      "Even if you eat plenty of fruits and vegetables, you may still be deficient in key nutrients. If that’s the case, supplement with these important vitamins.",
  },
  {
    title: "Practice self-love",
    description:
      "Exercising our ability to love ourselves is just as important as physical exercise. One way you can do this: after each workout, thank your amazing body for being able to do that hard work. This mindset of self-love is important for your health!",
  },
];

export default tips;
