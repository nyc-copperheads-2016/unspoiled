Rails.application.routes.draw do
  root 'categories#index'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :users, only: [:new, :create, :show] do
    resources :preferences
  end

  resources :categories, only: [:index] do
    resources :media, only: [:index, :create]
  end
end
