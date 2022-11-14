from modules.bank_account import *

bank_account = BankAccount("John", 500, "business")
print(bank_account.balance)
bank_account.pay_monthly_fee()
print(bank_account.balance)

bank_account1 = BankAccount("Steve", 5, "personal")
print(bank_account1.balance)
bank_account1.pay_monthly_fee()
print(bank_account1.balance)


print(bank_account1.__rates)
# print(bank_account.holder_name)
# bank_account1.holder_name = "Barbara"
# print(bank_account1.holder_name)
# print(bank_account1.balance)
# bank_account1.pay_in(20)
# print(bank_account1.balance)



# account = {
#     "holder_name": "John",
#     "balance": 500,
#     "type": "business"
# }

# print(get_account_name(account))