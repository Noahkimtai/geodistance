Rails.application.routes.draw do
  resources :routes
  resources :countries
  resources :places
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/distance_calculator/distance', to: 'distance_calculator#find_distance'
end
