Rails.application.routes.draw do
  devise_for :users
  root to: 'events#index'
  resources :events do
    resources :invitations, only: [:index, :create, :update ]
  end
    
end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
