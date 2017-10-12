function init() {
  handlebarsSetup()
  //put any page initialization/handlebars initialization here
  var formTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars.compile(formTemplate)
  document.getElementByTagName("main")[0].innerHTML = template({'submitAction': 'createRecipe()'})
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
  Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
}

function createRecipe(){
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.compile
}

function updateRecipe(){
  var recipe = getRecipeVals()
  var recipeTemplate = document.getElementById("recipe-template").innerHTML
  var template = Handlebars.copile(recipeTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function displayEditForm(){
  var name = document.getElementById("nameHeader").innerText;
  var description = document.getElementById("recipeDescription").innerText;
  var ingredientNodes = document.getElementsByName("ingredientsList")
  var ingredients = []
  for (let i = 0; i < ingredientNodes.length;i++) {
    ingredients.push(ingredientsNodes[i].innerText)
  }
  var recipe = {'name': name,'description': description,"ingredients": ingredients, submitAction: 'createRecipe()'}
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML
  var template = Handlebars(recipeFormTemplate)
  document.getElementById("main").innerHTML = template(recipe)
}

function getRecipeVals(){
  var ingredientsNodes = document.getElementsByName("ingredients")
  var ingredients = []
  for (let i = 0; i < ingredientNodes.length; i++) {
    if (ingredientNodes[i].value !== "") {
      ingredients.push(ingredientNodes[i].value)
      }
  }
  var name = document.getElementById("name").value
  var description = document.getElementById("description").value
  var recipe = {name, ingredients, description}
  return(recipe)
}
let template = Handlebars.compile(document.getElementById('recipe-template').innerHTML);
document.getElementById('main').innerHTML = template(recipe)

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
