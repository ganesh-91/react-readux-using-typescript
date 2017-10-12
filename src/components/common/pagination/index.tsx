/// <reference path="../../../types/index.d.ts" />

import * as React from 'react';

class PaginationComponent extends React.Component<any, IPaginationComponentProps> {
    constructor(props: IPaginationComponentProps) {
        super(props);

    }
    render() {
        let rows = [];
        let showPagination = true;
        for (var i = 1; i <= (this.props.itemCount / this.props.itemPerPage); i++) {
            if (this.props.activePage === i) {
                rows.push(
                    <li className="page-item" key={i}
                        onClick={e => this.props.pageChange(e, 'TO_PAGE_NUMBER')} >
                        <button type="button" value={i}
                            className="page-link btn btn-link active">{i}
                        </button>
                    </li>
                );
            } else {
                rows.push(
                    <li className="page-item" key={i}
                        onClick={e => this.props.pageChange(e, 'TO_PAGE_NUMBER')} >
                        <button type="button" value={i}
                            className="page-link btn btn-link">{i}
                        </button>
                    </li>
                );
            }
        }
        if (this.props.itemCount < this.props.itemPerPage) {
            showPagination = false;
        }
        return (
            <nav aria-label="Page navigation">
                <ul hidden={!showPagination} className={'pagination  pagination-sm' + ' ' + this.props.componentClassName}>
                    <li className="page-item">
                        <button type="button" className="page-link btn btn-link"
                            onClick={e => this.props.pageChange(e, 'PERVIOUS')}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </li>
                    {rows}
                    <li className="page-item">
                        <button type="button" className="page-link btn btn-link"
                            onClick={e => this.props.pageChange(e, 'NEXT')}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default PaginationComponent;
