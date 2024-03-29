ShopifyApp.configure do |config|
  config.application_name = "Polaris Rails Demo"
  config.api_key = ENV.fetch 'SHOPIFY_API_KEY'
  config.secret = ENV.fetch 'SHOPIFY_SECRET'
  config.scope = "read_orders, read_products"
  config.embedded_app = true
end
