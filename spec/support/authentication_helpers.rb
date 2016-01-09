module AuthenticationHelpers
  def stub_current_user user
    allow_any_instance_of(ApplicationController).to receive(:current_user).and_return(user)
  end

  def stub_authorize_user!
    allow_any_instance_of(ApplicationController).to receive(:authorize_user!).and_return(true)
  end
end
