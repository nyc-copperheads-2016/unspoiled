Rails.application.routes.draw do
  root 'categories#index'

  resources :sessions, only: [:new]
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/current_user', to: 'users#current_user'

  resources :users, only: [:new, :create, :show, :update] do
    resources :preferences
  end

  resources :categories, only: [:index] do
    resources :media, only: [:create]
  end
  get '/user_logged_in', to: 'sessions#user_logged_in'
  get '/filtered_words', to: 'users#filtered_words'
  # post '/filter_words', to: 'preferences#add_filter_words'
end
