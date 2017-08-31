export function PizzaService() {
    this.getPizzas = function() {
        return [
            {
                id: 0,
                name: "Salami",
                description: "ne pizza met vlees"
            },
            {
                id: 1,
                name: "Margharitta",
                description: "ne pizza zonder vlees"
            }
        ]
    }    
}
PizzaService.iid = "PizzaService";