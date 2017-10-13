/// <reference path="../../../types/index.d.ts" />

import * as React from 'react';

class PaginationComponent extends React.Component<any, IPaginationComponentProps> {
    constructor(props: IPaginationComponentProps) {
        super(props);

    }
    render() {
        let rows = [];
        let showPagination = true;
        for (var i = 1; i <= (Math.ceil(this.props.itemCount / this.props.itemPerPage)); i++) {
            if (this.props.activePage === i) {
                rows.push(
                    <li className="page-item" key={i}
                        onClick={(event) => { this.handlePaginationChange('TO_PAGE_NUMBER', event); }}>
                        <button type="button" value={i}
                            className="page-link btn btn-link active">{i}
                        </button>
                    </li>
                );
            } else {
                rows.push(
                    <li className="page-item" key={i}
                        onClick={(event) => { this.handlePaginationChange('TO_PAGE_NUMBER', event); }}>
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
                            onClick={(event) => { this.handlePaginationChange('PERVIOUS', event); }}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </li>
                    {rows}
                    <li className="page-item">
                        <button type="button" className="page-link btn btn-link"
                            onClick={(event) => { this.handlePaginationChange('NEXT', event); }}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </button>
                    </li>
                </ul>
            </nav >
        );
    }
    private handlePaginationChange(action: string, event: any): void {

        if (action === 'TO_PAGE_NUMBER') {
            this.props.pageChange(parseInt(event.target.value, 10));
        } else if (action === 'NEXT') {
            if (this.props.activePage >= (this.props.itemCount / this.props.itemPerPage)) {
                return;
            }
            this.props.pageChange(this.props.activePage + 1);
        } else if (action === 'PERVIOUS') {
            if (this.props.activePage <= 1) {
                return;
            }
            this.props.pageChange(this.props.activePage - 1);
        }
    }
}

export default PaginationComponent;
