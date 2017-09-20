import "./../assets/css/pizzeria.css";

import { PizzaService } from './pizza.service';

export function PizzeriaController(pizzaService) {
    var vm = this;
    vm.pizzas = pizzaService.getPizzas();
    vm.ingredients = pizzaService.getIngredients();

    vm.selectedPizza = undefined;
    vm.onPizzaClick = function(pizza) {
        vm.selectedPizza = pizza;
    };

    vm.onAddPizza = function(newPizza) {
        newPizza.ingredients = [];
        for(var x = 0; x < vm.ingredients.length; x ++) {
            if(vm.ingredients[x].selected) {
                newPizza.ingredients.push(vm.ingredients[x].name);
            }
        }

        console.log(newPizza);
    };
}
PizzeriaController.iid = "PizzeriaController";
PizzeriaController.$inject = [ PizzaService.iid ];