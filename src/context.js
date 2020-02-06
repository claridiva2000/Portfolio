import React, { Component } from "react";
import { projectData, detailProject } from "./data";

const ProjectContext = React.createContext();
//Provider
//Consumer

class ProjectProvider extends Component {
  state = {
    projects: [],
    cart: [],
    modalOpen: true,
    modalProject: detailProject
  };

  componentDidMount() {
    this.setProjects();
  }

  setProjects = () => {
    let tempProjects = [];
    projectData.forEach(item => {
      const singleItem = { ...item };
      tempProjects = [...tempProjects, singleItem];
    });
    this.setState(() => {
      return { projects: tempProjects };
    });
  };

  getItem = id => {
    const projects = this.state.projects.find(item => item.id === id);
    return projects;
  };

  handleDetail = id => {
    const project = this.getItem(id);
    this.setState(() => {
      return { detailProject: project };
    });
  };

  addToCart = id => {
    let tempProjects = [...this.state.projects];
    const index = tempProjects.indexOf(this.getItem(id));
    const project = tempProjects[index];
    // product.inCart = true;
    // product.count = 1;
    // const price = product.price;
    // product.total = price;
    this.setState(
      () => {
        return { projects: tempProjects };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openModal = id => {
    const project = this.getItem(id);
    this.setState(() => {
      return { modalProject: project, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  render() {
    return (
      <ProjectContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal
        }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer };
