import "./../assets/css/pizzeria.css";

import { PizzaService } from './pizza.service';

export function PizzeriaController(pizzaService) {
    var vm = this;
    vm.pizzas = pizzaService.getPizzas();

    vm.selectedPizza = undefined;
    vm.onPizzaClick = function(pizza) {
        vm.selectedPizza = pizza;
    }
}
PizzeriaController.iid = "PizzeriaController";
PizzeriaController.$inject = [ PizzaService.iid ];