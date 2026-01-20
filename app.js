// RecipeJS - Module Pattern (IIFE)
const RecipeApp = (() => {
    // ========== PRIVATE VARIABLES ==========
    
    // Recipe data - Private to this module
    const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        ingredients: ["400g spaghetti", "200g pancetta", "4 eggs", "100g Pecorino Romano cheese", "Black pepper"],
        steps: [
            "Bring a large pot of salted water to boil and cook spaghetti.",
            "Cut pancetta into small pieces and cook in a large pan until crispy.",
            "In a bowl, whisk together eggs, grated cheese, and black pepper.",
            "Drain spaghetti and add to the pan with pancetta.",
            "Remove from heat and quickly stir in the egg mixture to create a creamy sauce.",
            "Serve immediately with extra cheese and pepper."
        ]
    },
    {
        id: 2,
        title: "Chicken Tikka Masala",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        ingredients: ["800g chicken breast", "200ml yogurt", "400ml coconut milk", "2 onions", "4 garlic cloves", "Tikka masala spice blend"],
        steps: [
            "Marinate chicken in yogurt and spices for 15 minutes.",
            "Cook chicken in a hot pan until golden on all sides.",
            "Sauté onions and garlic in the same pan.",
            "Add tomatoes and spice paste, simmer for 10 minutes.",
            "Stir in coconut milk and return chicken to the pan.",
            "Simmer for 15 minutes until sauce thickens. Serve with rice."
        ]
    },
    {
        id: 3,
        title: "Homemade Croissants",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking",
        ingredients: ["500g flour", "250g butter", "10g salt", "50g sugar", "10g yeast", "250ml water"],
        steps: [
            {
                step: "Prepare the dough",
                substeps: [
                    "Mix flour, salt, sugar, yeast, and water to form a dough",
                    "Knead for 5 minutes until smooth",
                    "Let rest for 30 minutes in a covered bowl"
                ]
            },
            {
                step: "First lamination - Fold in cold butter",
                substeps: [
                    "Roll dough into a rectangle",
                    "Place cold butter in the center",
                    "Fold dough over butter and seal edges",
                    "Roll thin and fold into thirds",
                    "Rest for 20 minutes"
                ]
            },
            {
                step: "Complete lamination",
                substeps: [
                    "Roll dough and fold into thirds again",
                    "Rest for 20 minutes",
                    "Repeat rolling and folding two more times",
                    "Final rest: 30 minutes"
                ]
            },
            {
                step: "Shape and proof",
                substeps: [
                    "Roll dough into a large rectangle",
                    "Cut into triangles",
                    "Roll each triangle from base to point",
                    "Place on baking sheet and let proof 2-3 hours until puffy"
                ]
            },
            {
                step: "Bake",
                substeps: [
                    "Preheat oven to 200°C",
                    "Brush croissants with egg wash",
                    "Bake for 20 minutes until golden and flaky",
                    "Cool on wire rack"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Greek Salad",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad",
        ingredients: ["2 tomatoes", "1 cucumber", "200g feta cheese", "100g olives", "1 red onion", "Olive oil", "Oregano"],
        steps: [
            "Chop tomatoes and cucumber into chunks.",
            "Dice the red onion and crumble feta cheese.",
            "Combine vegetables and feta in a large bowl.",
            "Drizzle with olive oil and sprinkle oregano.",
            "Toss gently and serve immediately."
        ]
    },
    {
        id: 5,
        title: "Beef Wellington",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat",
        ingredients: ["1.5kg beef fillet", "400g mushrooms", "320g puff pastry", "2 shallots", "200g prosciutto", "Egg wash"],
        steps: [
            {
                step: "Prepare the beef",
                substeps: [
                    "Bring beef to room temperature",
                    "Season generously with salt and pepper",
                    "Sear on all sides in a hot pan until browned (2 minutes per side)",
                    "Cool for 5 minutes and brush with Dijon mustard"
                ]
            },
            {
                step: "Make mushroom duxelles",
                substeps: [
                    "Finely chop 400g mushrooms and 2 shallots",
                    "Cook in a pan over medium heat for 10 minutes",
                    "Stir constantly until all moisture evaporates",
                    "Season with salt, pepper, and herbs"
                ]
            },
            {
                step: "Wrap beef",
                substeps: [
                    "Lay prosciutto slices in a line, overlapping",
                    "Spread mushroom duxelles over prosciutto",
                    "Place beef fillet on top and roll tightly",
                    "Wrap in plastic and refrigerate for 30 minutes"
                ]
            },
            {
                step: "Wrap in pastry and bake",
                substeps: [
                    "Preheat oven to 190°C",
                    "Wrap puff pastry around the beef package and seal edges with water",
                    "Brush with egg wash and score decorative lines",
                    "Bake for 35-45 minutes until golden (rare: 30-35 min, medium: 40-45 min)",
                    "Rest for 10 minutes before serving"
                ]
            }
        ]
    },
    {
        id: 6,
        title: "Vegetable Stir Fry",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian",
        ingredients: ["2 cups broccoli", "1 bell pepper", "2 carrots", "3 garlic cloves", "3 tbsp soy sauce", "1 tbsp sesame oil"],
        steps: [
            "Prepare all vegetables by cutting into bite-sized pieces.",
            "Heat oil in a wok or large pan over high heat.",
            "Add garlic and cook for 30 seconds until fragrant.",
            "Add harder vegetables first (carrots, broccoli) and stir fry for 3 minutes.",
            "Add softer vegetables (bell pepper) and cook for 2 more minutes.",
            "Pour in soy sauce and sesame oil, toss to coat. Serve with rice."
        ]
    },
    {
        id: 7,
        title: "Pad Thai",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles",
        ingredients: ["400g rice noodles", "300g shrimp", "3 tbsp tamarind paste", "3 tbsp fish sauce", "2 tbsp brown sugar", "Crushed peanuts", "Lime"],
        steps: [
            "Soak rice noodles in warm water until soft, then drain.",
            "Make sauce by mixing tamarind paste, fish sauce, and brown sugar.",
            "Heat oil in a wok and cook shrimp until pink.",
            "Add soaked noodles and sauce, toss everything together for 2-3 minutes.",
            "Add bean sprouts and green onions, cook for 1 more minute.",
            "Serve topped with crushed peanuts and a squeeze of lime."
        ]
    },
    {
        id: 8,
        title: "Margherita Pizza",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza",
        ingredients: ["500g pizza dough", "200ml tomato sauce", "300g fresh mozzarella", "3 tomatoes", "Fresh basil", "Olive oil", "Salt"],
        steps: [
            "Preheat oven to 250°C and prepare a pizza stone or baking sheet.",
            "Stretch pizza dough to desired thickness on the prepared surface.",
            "Spread tomato sauce evenly, leaving a border for the crust.",
            "Tear mozzarella and distribute over the sauce.",
            "Add tomato slices and drizzle with olive oil.",
            "Bake for 12-15 minutes until crust is golden and cheese is bubbly. Top with fresh basil."
        ]
    }
];

    // DOM Elements - Private to this module
    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filters button');
    const sortButtons = document.querySelectorAll('.sorters button');
    
    // State - Private to this module
    let currentFilter = 'all';
    let currentSort = null;
    
    // ========== PRIVATE FUNCTIONS ==========
    
    // Recursive function to render steps with any level of nesting
    const renderStepsRecursively = (steps, depth = 1) => {
    return steps
        .map((step, index) => {
            // Base case: step is a string
            if (typeof step === 'string') {
                return `<li><strong>Step ${index + 1}:</strong> ${step}</li>`;
            }
            
            // Recursive case: step is an object with substeps
            if (typeof step === 'object' && step.substeps && Array.isArray(step.substeps)) {
                const substepsHTML = renderStepsRecursively(step.substeps, depth + 1);
                const listClass = depth > 1 ? `nested-list-${depth}` : '';
                
                return `
                    <li>
                        <strong>Step ${index + 1}: ${step.step}</strong>
                        <${depth === 1 ? 'ol' : 'ul'} class="nested-steps ${listClass}">
                            ${substepsHTML}
                        </${depth === 1 ? 'ol' : 'ul'}>
                    </li>
                `;
            }
            
            return '';
        })
        .join('');
    };
    
    // Function to create HTML for a single recipe card (pure)
    const createRecipeCard = (recipe) => {
        const ingredientsList = recipe.ingredients
            .map(ing => `<li>${ing}</li>`)
            .join('');
        
        const stepsHTML = renderStepsRecursively(recipe.steps);
        
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} min</span>
                    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                </div>
                <p>${recipe.description}</p>
                
                <div class="recipe-buttons">
                    <button class="btn-toggle" data-type="ingredients">Show Ingredients</button>
                    <button class="btn-toggle" data-type="steps">Show Steps</button>
                </div>
                
                <div class="recipe-section ingredients-section hidden">
                    <h4>Ingredients</h4>
                    <ul>
                        ${ingredientsList}
                    </ul>
                </div>
                
                <div class="recipe-section steps-section hidden">
                    <h4>Steps</h4>
                    <ol>
                        ${stepsHTML}
                    </ol>
                </div>
            </div>
        `;
    };
    
    // Function to render recipes to the DOM (side-effect isolated here)
    const renderRecipes = (recipesToRender) => {
        const recipeCardsHTML = recipesToRender
            .map(createRecipeCard)
            .join('');
        
        recipeContainer.innerHTML = recipeCardsHTML;
    };
    
    // Event delegation handler for toggle buttons
    const handleToggleClick = (e) => {
        // Only handle clicks on toggle buttons
        if (!e.target.classList.contains('btn-toggle')) {
            return;
        }
        
        // Get the section type (ingredients or steps)
        const sectionType = e.target.getAttribute('data-type');
        
        // Get the closest recipe card
        const card = e.target.closest('.recipe-card');
        if (!card) return;
        
        // Find the corresponding section
        const section = card.querySelector(`.${sectionType}-section`);
        if (!section) return;
        
        // Toggle the hidden class
        section.classList.toggle('hidden');
        
        // Update button text to reflect current state
        const isHidden = section.classList.contains('hidden');
        const sectionName = sectionType.charAt(0).toUpperCase() + sectionType.slice(1);
        const displayText = isHidden ? `Show ${sectionName}` : `Hide ${sectionName}`;
        e.target.textContent = displayText;
            return recipesList.filter((recipe) => recipe.time < 30);
        }
    
        // difficulty filters: easy, medium, hard
        return recipesList.filter((recipe) => recipe.difficulty === filterMode);
    };
    
    // Pure function: sort recipes based on mode (works on a shallow copy)
    const applySort = (recipesList, sortMode) => {
        if (!sortMode) return recipesList;
    
        const copy = [...recipesList];
    
        if (sortMode === 'name') {
            return copy.sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        }
    
        if (sortMode === 'time') {
            return copy.sort((a, b) => a.time - b.time);
        }
    
        return copy;
    };
    
    // Central function: combines filter + sort then renders
    const updateDisplay = () => {
        const filtered = applyFilter(recipes, currentFilter);
        const sorted = applySort(filtered, currentSort);
        renderRecipes(sorted);
    };
    
    // Helper: update active button styles
    const setActiveButton = (buttons, activeAttr, value) => {
        buttons.forEach((btn) => {
            if (btn.getAttribute(activeAttr) === value) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };
    
    // Setup event listeners for filters
    const setupFilterListeners = () => {
        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const selectedFilter = button.getAttribute('data-filter');
                currentFilter = selectedFilter;
                setActiveButton(filterButtons, 'data-filter', selectedFilter);
                updateDisplay();
            });
        });
    };
    
    // Setup event listeners for sorters
    const setupSortListeners = () => {
        sortButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const selectedSort = button.getAttribute('data-sort');
                // toggle sort off if same button clicked again
                currentSort = currentSort === selectedSort ? null : selectedSort;
                setActiveButton(sortButtons, 'data-sort', currentSort);
                updateDisplay();
            });
        });
    };
    
    // Setup event delegation for toggle buttons (show/hide ingredients and steps)
    const setupToggleListeners = () => {
        recipeContainer.addEventListener('click', handleToggleClick);
    };
    
    // ========== PUBLIC API ==========
    
    return {
        // Initialize the app
        init: () => {
            setupFilterListeners();
            setupSortListeners();
            setupToggleListeners();
            updateDisplay();
        }
    };
})();

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    RecipeApp.init();
});