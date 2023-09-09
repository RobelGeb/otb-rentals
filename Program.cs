using System;
using Stripe;

class Program
{
  static void Main(string[] args)
  {
    StripeConfiguration.ApiKey = "sk_test_51NoGsrJL9cid2s5P3gUKNkFqfPzsZhgDzhLqLXWDYSn7uSULSudvaPP7Rs3jKnqXvXqHqRgMQKPRO7WgqzZ4wzuk00e2fsoQdn";

    var optionsProduct = new ProductCreateOptions
    {
      Name = "Starter Subscription",
      Description = "$12/Month subscription",
    };
    var serviceProduct = new ProductService();
    Product product = serviceProduct.Create(optionsProduct);
    Console.Write("Success! Here is your starter subscription product id: {0}\n", product.Id);

    var optionsPrice = new PriceCreateOptions
    {
      UnitAmount = 1200,
      Currency = "usd",
      Recurring = new PriceRecurringOptions
      {
          Interval = "month",
      },
      Product = product.Id
    };
    var servicePrice = new PriceService();
    Price price = servicePrice.Create(optionsPrice);
    Console.Write("Success! Here is your starter subscription price id: {0}\n", price.Id);
  }
}