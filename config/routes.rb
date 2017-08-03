Rails.application.routes.draw do
  mount ShopifyApp::Engine, at: '/'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: redirect('/login')

  get 'embedded', to: 'embedded_app#index'
  get 'embedded/*other', to: 'embedded_app#index'
end
