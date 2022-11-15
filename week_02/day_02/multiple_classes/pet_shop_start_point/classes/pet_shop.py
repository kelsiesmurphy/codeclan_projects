class PetShop:
    def __init__(self, name, pets, total_cash):
        self.name = name
        self.pets = pets
        self.pets_sold = 0
        self.total_cash = total_cash

    def stock_count(self):
        return len(self.pets)

    def increase_pets_sold(self):
        self.pets_sold += 1

    def increase_total_cash(self, cash):
        self.total_cash += cash
    
    def remove_pet(self, pet):
        self.pets.remove(pet)

    def find_pet_by_name(self, name_str):
        for pet in self.pets:
            if pet.name == name_str:
                return pet

    def sell_pet_to_customer(self, pet_name, customer):
        pet = self.find_pet_by_name(pet_name)
        customer.reduce_cash(pet.price)
        self.increase_total_cash(pet.price)
        self.increase_pets_sold()
        self.remove_pet(pet)
        self.stock_count()
        customer.add_pet(pet)
        customer.pet_count()