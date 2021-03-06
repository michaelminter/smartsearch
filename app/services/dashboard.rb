class Dashboard
  def initialize(user)
    @user = user
    Groupdate.time_zone = @user.time_zone
  end

  def activity_chart
    @user.user_aggregates.group_by_day(:created_at, last: 7, format: '%b %e').count
  end

  def activity_table
    @user.company_activities
  end

  # @return [Hash]
  def progress_chart
    @user.company_progresses.group(:event_type).order(CompanyProgress.custom_order).count
  end
end
