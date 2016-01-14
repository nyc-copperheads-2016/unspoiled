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
    resources :media, only: [:new, :create]
  end

  get '/media/:media_id/words', to: 'words#new'
  post '/media/:media_id/words', to: 'words#create', as: 'media_words'

  get '/user_logged_in', to: 'sessions#user_logged_in'
  get '/filtered_words', to: 'users#filtered_words'
end
