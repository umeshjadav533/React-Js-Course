import { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo){
    console.log("ErrorBoundry caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went Wrong!</h2>
          <p>{this.props.fallback}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
