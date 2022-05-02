class Timebox < Bridgetown::Component
  def initialize
    @current_time = Time.now.strftime("%B %-d, %Y %I:%M:%S %p")
  end
end