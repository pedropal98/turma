Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  get 'events/calender', to: 'events#index'
  resources :events do
    resources :invitations, only: [ :new, :create ]
    resources :messages, only: :create
  end
  resources :invitations, only: [:destroy]
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
