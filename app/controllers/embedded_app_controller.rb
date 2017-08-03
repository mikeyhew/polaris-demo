class EmbeddedAppController < ShopifyApp::AuthenticatedController

  def index
    render plain: "Welcome to my app!"
  end
end
