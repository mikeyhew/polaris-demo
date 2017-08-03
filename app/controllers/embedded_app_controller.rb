class EmbeddedAppController < ShopifyApp::AuthenticatedController

  def index
    render layout: false
  end
end
