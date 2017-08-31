import { PizzaService } from './pizza.service';

export function PizzeriaController(pizzaService) {
    var vm = this;
    vm.pizzas = pizzaService.getPizzas();
}
PizzeriaController.iid = "PizzeriaController";
PizzeriaController.$inject = [ PizzaService.iid ];