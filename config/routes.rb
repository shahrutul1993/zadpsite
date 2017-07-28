Rails.application.routes.draw do
  root 'pages#index'

  get 'pages/account'

  get 'pages/cart'

  get 'pages/checkout'

  get 'pages/order_cancellation'

  get 'pages/order_list'

  get 'pages/order_tracking'

  get 'pages/products'

  get 'pages/single'

  get 'pages/wishlist'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
