import React, { useState } from 'react'

const RecipeCollection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const category = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "fast food"];
     const recipes = [
    {
      id: 1,
      title: 'Pancakes',
      category: 'breakfast',
      time: '20 min',
      difficulty: 'easy',
      image: '🥞',
      ingredients: ['flour', 'eggs', 'milk', 'butter']
    },
    {
      id: 2,
      title: 'Pasta Carbonara',
      category: 'dinner',
      time: '30 min',
      difficulty: 'medium',
      image: '🍝',
      ingredients: ['pasta', 'eggs', 'cheese', 'bacon']
    },
    {
      id: 3,
      title: 'Caesar Salad',
      category: 'lunch',
      time: '15 min',
      difficulty: 'easy',
      image: '🥗',
      ingredients: ['lettuce', 'croutons', 'parmesan', 'chicken']
    },
    {
      id: 4,
      title: 'Chocolate Cake',
      category: 'dessert',
      time: '45 min',
      difficulty: 'medium',
      image: '🍰',
      ingredients: ['flour', 'cocoa', 'sugar', 'eggs']
    },
     {
    id: 5,
    title: 'Grilled Cheese Sandwich',
    category: 'lunch',
    time: '10 min',
    difficulty: 'easy',
    image: '🧀',
    ingredients: ['bread', 'cheese', 'butter']
  },
  {
    id: 6,
    title: 'Chicken Wrap',
    category: 'lunch',
    time: '20 min',
    difficulty: 'medium',
    image: '🌯',
    ingredients: ['tortilla', 'chicken', 'lettuce', 'mayo']
  },

  // 🍝 Dinner
  {
    id: 7,
    title: 'Pasta Carbonara',
    category: 'dinner',
    time: '30 min',
    difficulty: 'medium',
    image: '🍝',
    ingredients: ['pasta', 'eggs', 'cheese', 'bacon']
  },
  {
    id: 8,
    title: 'Grilled Salmon',
    category: 'dinner',
    time: '25 min',
    difficulty: 'medium',
    image: '🐟',
    ingredients: ['salmon', 'lemon', 'garlic', 'butter']
  },
  {
    id: 9,
    title: 'Beef Stew',
    category: 'dinner',
    time: '1 hr 30 min',
    difficulty: 'hard',
    image: '🥘',
    ingredients: ['beef', 'carrots', 'potatoes', 'onion']
  },
  {
    id: 10,
    title: 'Fried Rice',
    category: 'dinner',
    time: '25 min',
    difficulty: 'medium',
    image: '🍚',
    ingredients: ['rice', 'soy sauce', 'egg', 'vegetables']
  },

  // 🍰 Dessert
  {
    id: 11,
    title: 'Chocolate Cake',
    category: 'dessert',
    time: '45 min',
    difficulty: 'medium',
    image: '🍰',
    ingredients: ['flour', 'cocoa', 'sugar', 'eggs']
  },
  {
    id: 12,
    title: 'Ice Cream Sundae',
    category: 'dessert',
    time: '5 min',
    difficulty: 'easy',
    image: '🍨',
    ingredients: ['ice cream', 'chocolate syrup', 'nuts', 'cherry']
  },
  {
    id: 13,
    title: 'Fruit Salad',
    category: 'dessert',
    time: '10 min',
    difficulty: 'easy',
    image: '🍓',
    ingredients: ['apple', 'banana', 'grapes', 'orange']
  },
  {
    id: 14,
    title: 'Cheesecake',
    category: 'dessert',
    time: '1 hr',
    difficulty: 'hard',
    image: '🧁',
    ingredients: ['cream cheese', 'sugar', 'eggs', 'crust']
  },
  {
  id: 15,
  title: 'French Toast',
  category: 'breakfast',
  time: '15 min',
  difficulty: 'easy',
  image: '🍞',
  ingredients: ['bread', 'eggs', 'milk', 'cinnamon', 'syrup']
},
{
  id: 16,
  title: 'Waffles',
  category: 'breakfast',
  time: '20 min',
  difficulty: 'medium',
  image: '🧇',
  ingredients: ['flour', 'eggs', 'milk', 'baking powder', 'butter']
}
  ];
  
  const filterRecipes =
  selectedCategory === "All"
    ? recipes
    : recipes.filter(recipe => recipe.category.toLowerCase() === selectedCategory.toLowerCase());

  
  const getDifficultColor = (difficulty)=> {
    switch(difficulty) {
      case "easy":
        return "text-green-600 bg-green-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "hard":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";      
    }
  }
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 py-8 px-4'>
     <div className='max-w-4xl mx-auto'>
      {/* Header */}
      <div className='text-center mb-12'>
      <h1 className='text-3xl font-bold text-gray-800 mb-4'>My Recipee collection</h1>
      <p className='text-gray-600'>Find Your Favourite Recipes And Starting Cooking</p>
     </div>
     {/* Category Filters */}
     
     <div className='flex justify-center gap-4 mb-8 flex-wrap'>
      {
        category.map((categories)=> (
          <button 
          key={categories}
          onClick={()=> setSelectedCategory(categories)}
          className={`px-4 py-2 rounded-full capitalize cursor-pointer ${selectedCategory === categories ? "bg-orange-500 text-white" : "bg-white text-gray-600 hover:bg-orange-100"
         }`}
          
          >
            {categories}
          </button>
        ))
      }

      
     </div>
     {/* Recipee List */}

    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {
        filterRecipes.map((recipe)=> (
          <div 
          key={recipe.id}
          className='bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow'>
            {/* recipee header */}
            <div className='p-6'>
              <div className='flex justify-between items-center'>
              <h2 className='text-xl font-semibold text-gray-800'>{recipe.title}</h2>
              <span className='text-4xl'>{recipe.image}</span>
              </div>
              {/* recipe details */}
            <div className='flex items-center gap-4 mb-4'>
            <span className='text-gray-500 text-sm flex items-center'>⏱️ {recipe.time}</span>
             <span className={`text-sm px-2 py-2 rounded-full ${getDifficultColor(recipe.difficulty)}`}>
             {recipe.difficulty}
              </span>

            </div>

            {/* ingridients */}
            <div>
              <h3 className='text-sm font-medium tex-gray-700  mb-2'>Ingridients:</h3>
              <div className='flex iems-center flex-wrap gap-2'>
              {
                recipe.ingredients.map((ingredient, index)=> (
                  <span className='px-2 py-1 bg-gray-100 rounded-full text-gray-600 text-sm cursor-pointer' key={index}>{ingredient}</span>
                ) )
              }
            </div>
            </div>
            </div>
            
          
          
          </div>
        ))
      }
    </div>
      {
        filterRecipes.length === 0 && (
          <div className='text-center py-12'>
            <p className='text-gray-500'>no recipes not found in this category</p>
          </div>
        )
      }
     </div>
    </div>
  )
}

export default RecipeCollection;